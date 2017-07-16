import React from 'react';
import HourlySlider from './hourlySlider.js';
import Icon from '../Icons/icon.js';
import Slider from 'rc-slider';
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
    let city = this.props.wData.city,
    state = this.props.wData.state,
    wData = this.props.wData.hourlyData[this.state.currentIndex];

    let hoursToDisplay = 24;

    let marks = {};
    for(let i = 0;i<Math.min(hoursToDisplay, this.props.wData.hourlyData.length);i++){
      marks[i] ={
        style:{
          top:'-10px'
        },
        label:'|'
      };
    }
    //console.log("time:");
    //console.log(wData.time);
    return(
      <div className ="weather-box-container">
        <div>{this.state.currentIndex===0? "Now" : wData.formattedTime}</div>
        <div className="cur-weather-image">
          <Icon name={wData.icon} />
        </div>
        <div className="cur-weather-condition">
          <span className="temp">{Math.round(wData.temp)}</span> |{wData.summary}
        </div>
        <div className="slider-container">
          <Slider step={1} marks = {marks} dotStyle={{display:'none'}} defaultValue={0} min={0} max={Math.min(hoursToDisplay, this.props.wData.hourlyData.length)-1} onChange={(e)=>{this.setCurrentIndex(e)}} />
        </div>
      </div>
    )
  }

  setCurrentIndex(index){
    console.log(index);
    this.setState({
      currentIndex:index
    })
  }
}

export default CurrentWeatherBox;
