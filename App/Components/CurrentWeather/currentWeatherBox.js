import React from 'react';
import HourlySlider from './hourlySlider.js';
import Icon from '../Icons/icon.js';
import Slider from 'rc-slider';
import {formatLongDay, formatHour} from '../../Utilities/formatDate.js';
require('rc-slider/assets/index.css');

class CurrentWeatherBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentIndex:0
    }
  }

  componentWillMount(){
    console.log("Mounting!!!!!");
    if(this.props.wData){
      console.log("Wdata coming in!");
      this.props.wData.hourlyData.forEach(wData=>{
        wData.formattedTime = formatLongDay(wData.time) + ", " + formatHour(wData.time);
      });
    }
  }

  render(){
    if(!this.props.wData) return null;
    let city = this.props.wData.city,
    state = this.props.wData.state,
    wData = this.props.wData.hourlyData[this.state.currentIndex];

    let hoursToDisplay = 24;
    console.log("time:");
    console.log(wData.time);
    return(
      <div className ="weather-box-container">
        <div>{wData.formattedTime}</div>
        <div className="cur-weather-image">
          <Icon name={wData.icon} />
        </div>
        <div className="cur-weather-condition">
          {Math.round(wData.temp)} |{wData.summary}
        </div>
        <div className="slider-container">
          <Slider step={1} defaultValue={0} min={0} max={Math.min(hoursToDisplay, this.props.wData.hourlyData.length)-1} onChange={(e)=>{this.setCurrentIndex(e)}} />
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
