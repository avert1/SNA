import React from 'react';
import CurrentWeatherBox from '../CurrentWeather/currentWeatherBox.js';
import DailyForecast from '../DailyForecast/dailyForecast.js';
import HistoricWeather from '../HistoricWeather/historicWeather.js';

class WeatherModule extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTab: "current",
      currentWeather:null,
      dailyWeather:null
    }
  }

  componentDidMount(){
    fetch(`/data`).then(response=>response.json())
    .then((data)=>{
      console.log(data);
      this.setState({
        currentWeather:data.current,
        dailyWeather:data.daily,
      })
    });
    fetch(`/past`).then(response=>response.json())
    .then((data)=>{
      console.log(data);
      this.setState({
        historicWeather:data.past
      })
    });
  }

  render(){
    if(!this.state.currentWeather)return null;
    //if(!this.state.historicWeather)return null;
    console.log(this.state.currentWeather);
    return(
      <div className="weather-container">
        <CurrentWeatherBox wData={this.state.currentWeather} />
        <DailyForecast wData={this.state.dailyWeather}/>
        {/*<HistoricWeather wData={this.state.historicWeather} currentTemp={65}/>*/}
      </div>
    )
  }

  changeLocation(center){
    let map = new google.maps.Map(document.getElementById('map-container'), {
      zoom: 6,
      center
    });
  }
}

export default WeatherModule;
