import React from 'react';
import './interactiveMap.scss';

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
    else if(nextProps.center && nextProps.center.lat && nextProps.center.lng){
      this.map.setCenter(nextProps.center)
    }

  }

  render(){
    return(
      <div className="map-container">
        <div id="map">
        </div>
      </div>
    )
  }

  createMap(center){
     this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center,
      gestureHandling:"none",
      scrollwheel:false,
      disableDoubleClickZoom:true,
      disableDefaultUI:false
    });
  }
}

export default InteractiveMap;
