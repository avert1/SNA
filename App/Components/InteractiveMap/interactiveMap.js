import React from 'react';

class InteractiveMap extends React.Component {
  componentDidMount(){
    if(!this.map){
      this.createMap(this.props.center);
    }
  }

  componentWillReceiveProps(nextProps){
    if(!this.map){
      console.log("Map not created!");
      this.createMap(nextProps.center);
    }
    if(nextProps.center && nextProps.center.lat && nextProps.center.lng){
      this.map.setCenter(nextProps.center)
    }

  }

  render(){
    return(
      <div id="map-container">
      </div>
    )
  }

  createMap(center){
     this.map = new google.maps.Map(document.getElementById('map-container'), {
      zoom: 7,
      center,
      gestureHandling:"none"
    });
  }
}

export default InteractiveMap;
