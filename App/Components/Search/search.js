import React from 'react';

class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shouldDisplay:false,
      results:null,
      recent:[]
    }
  }

  render(){
    return (
      <div className="s-container module">
        <div className="page-header">
          Search for a Location
        </div>
        <input type="text" placeholder="Press enter to search"
        onKeyPress={(e)=>{if(e.key === 'Enter') this.searchFor(e.target.value)}} />
        {this.generateResults(this.state.results)}
      </div>
    )
  }

  searchFor(searchVal){
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': searchVal}, (results, status)=> {
      if(status == 'OK' || status == 'ZERO_RESULTS') {
        console.log(results);
        //Add to recent searches if at least one val is returned
        if(results.length >= 1) {
          this.addRecentSearch(searchVal);
        }
        if(results.length==1){
          //Get weather data for this location
          let lat=results[0].geometry.location.lat();
          let lng=results[0].geometry.location.lng();
          let name= results[0].formatted_address;
          //let lat=37.8267;
          //let lng=-122.4233;
          this.props.updateLocation(lat, lng, name)
        }
        else {
          this.setState({
            results
          });
        }
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  generateRecentSearches(){
    let recent = JSON.parse(localStorage.getItem('recentsearch'));
    console.log("Parsed obj: ");
    console.log(recent);
    if(!recent || !Array.isArray(recent)){
      return null;
    }
    let searches = recent.map((search, index)=>(
        <div className="result" key={index} onClick={()=>{this.searchFor(search)}}>{search}</div>
    )).reverse();

    return (
      <div className="module">
        <div className="headline">
          Recent Searches:
        </div>
        <div className="results module">
          {searches}
        </div>
      </div>
    )
  }

  addRecentSearch(searchVal){
    let recent = JSON.parse(localStorage.getItem('recentsearch'));
    if(!recent || !Array.isArray(recent)){
      localStorage.setItem('recentsearch', JSON.stringify([searchVal]));
    } else {
      let index = recent.indexOf(searchVal);
      if(index > -1){
        recent.splice(index, 1);
      }
      recent.push(searchVal);
      console.log("new array:");
      console.log(recent);
      localStorage.setItem('recentsearch', JSON.stringify(recent));
    }
  }

  generateResults(results){
    if(!results) {
      return this.generateRecentSearches();
    } else if(results.length == 0){
        return (
          <div className="results module">
            <div className="headline">
              Sorry! No results were found for the specified search.
            </div>
          </div>
        )
    }
    let resultJSX = results.map((result, index)=>{
      let lat=result.geometry.location.lat();
      let lng=result.geometry.location.lng();
      let name= result.formatted_address;
      return (
        <div className="result" key={index} onClick={()=>{this.props.updateLocation(lat, lng, name)}}>{name}</div>
      );
    });

    return (
      <div className="results module">
        <div className="headline">
          Results
        </div>
        {resultJSX}
      </div>
    )
  }
}

export default Search;
