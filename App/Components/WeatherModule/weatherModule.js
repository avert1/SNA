import React from 'react';
import {formatLongDay, formatHour} from '../../Utilities/formatDate.js';
import CurrentWeatherPage from '../Pages/currentWeatherPage.js';
import HistoricWeatherPage from '../Pages/historicWeatherPage.js';
import Navigation from '../Navigation/navigation.js';
import InteractiveMap from '../InteractiveMap/interactiveMap.js';
import Search from '../Search/search.js';

class WeatherModule extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: "Current",
      //Default latlng
      lat: 37.8267,
      lng: -122.4233,
      location:"Los Angeles",
      currentData: {},
      historicData: {}
    }
  }

  componentDidMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'location': {lat:pos.coords.latitude, lng:pos.coords.longitude}}, (results, status)=> {
          if(status == 'OK') {
            let location = results[0].formatted_address;
            this.updateLocation(pos.coords.latitude, pos.coords.longitude, location);
          }
        });
      }, (err)=>{
        console.log("error!!!");
        this.updateLocation(this.state.lat, this.state.lng, this.state.location);
      });
    }
  }

  render(){
    //This code needs to be replaced with React Router
    let componentToRender = (<Search updateLocation={this.updateLocation.bind(this)}/>);
    let latlng = this.state.currentData && Object.keys(this.state.currentData).length>0?{lat:this.state.lat, lng:this.state.lng}:null;
    if(this.state.currentPage==="Current"){
      componentToRender = (<CurrentWeatherPage wData={this.state.currentData} location={this.state.location} />);
    } else if(this.state.currentPage==="Historic") {
      componentToRender = (<HistoricWeatherPage wData={this.state.historicData} location={this.state.location} currentTemp={65}/>)
    }
    return(
      <div>
        <InteractiveMap center={latlng} />
        <div className="weather-container">
          <Navigation setPage={this.setPage.bind(this)} currentTab={this.state.currentPage} />
          {componentToRender}
        </div>
      </div>
    );
  }

  setPage(page){
    this.setState({
      currentPage:page
    })
  }

  updateLocation(lat, lng, location = "Unknown Location"){
    console.log("getting location data!");
    this.setState({
      lat,
      lng,
      currentData:{},
      historicData:{},
      currentPage:"Current"
    }, ()=>{
      fetch(`/data?lat=${lat}&lng=${lng}`)
      .then(response=>response.json())
      .then((data)=>{
        console.log("checking data!");
        console.log(data);
        if(!data){
          //Error out
          this.setState({
            currentData:null,
            location
          });
          return;
        }

        //Modify the times of wData. Originally done in currentWeatherBox but thats an anti-pattern
        data.currentData.hourlyData.forEach(wData=>{
          wData.formattedTime = formatLongDay(wData.time) + ", " + formatHour(wData.time);
        });

        this.setState({
          currentData:data,
          location
        });
      })
      .catch(err=>{
        this.setState({
          currentData:null,
          location
        });
      });

      fetch(`/past/`)
      .then(response=>{
        if(response.ok)return response.json();
        //Otherwise error out
        return;
      })
      .then((data)=>{
        //console.log("historicData:");
        console.log(data);
        this.setState({
          historicData:data
        })
      });
    });
  }
}

export default WeatherModule;
