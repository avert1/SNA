import React from 'react';
import Icon from '../Icons/icon.js';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
require('rc-slider/assets/index.css');

class CurrentWeatherBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentIndex:0
    }
  }

  render(){
    if(!this.props.wData) return null;
    let wData = this.props.wData[this.state.currentIndex];
    let hoursToDisplay = 24;

    let marks = {};
    for(let i = 0;i<Math.min(hoursToDisplay, this.props.wData.length);i++){
      marks[i] ={
        style:{
          top:'-10px'
        },
        label:'|'
      };
    }
    return(
      <div className ="weather-box-container">
        <div>{this.state.currentIndex===0? "Now" : wData.formattedTime}</div>
        <div className="cur-weather-image">
          <Icon name={wData.icon} />
        </div>
        <div className="cur-weather-condition">
          <span className="temp">{Math.round(wData.temp)}</span> | {wData.summary}
        </div>
        <div className="slider-container">
          <Slider step={1} marks = {marks} dotStyle={{display:'none'}} defaultValue={0} min={0} max={Math.min(hoursToDisplay, this.props.wData.length)-1} onChange={(e)=>{this.setCurrentIndex(e)}} />
        </div>
      </div>
    )
  }

  setCurrentIndex(index){
    this.setState({
      currentIndex:index
    })
  }
}

CurrentWeatherBox.propTypes = {
  wData:PropTypes.array.isRequired
}

export default CurrentWeatherBox;
