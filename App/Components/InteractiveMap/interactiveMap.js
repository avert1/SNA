import React from 'react';

class InteractiveMap extends React.Component {
  componentDidMount(){
    let uluru = {lat: -25.363, lng: 131.044};
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        uluru = {lat:pos.coords.latitude, lng:pos.coords.longitude}
        this.createMap(uluru);
      });
    }
  }

  render(){
    return(
      <div id="map-container">
        hi
      </div>
    )
  }

  createMap(center){
    let map = new google.maps.Map(document.getElementById('map-container'), {
      zoom: 7,
      center
    });
  }
}

export default InteractiveMap;
