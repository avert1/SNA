import React from 'react';
import HourlySlider from './hourlySlider.js';

class CurrentWeatherBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentIndex:0
    }
  }

  render(){
    let wData = this.props.wData[this.state.currentIndex];
    return(
      <div className ="cur-weather-container module">
        <div className="cur-weather-header">
          Current Weather for {wData.city+', '+ wData.state}
        </div>
        <div className="cur-weather-image">
          <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
          </div>
        </div>
        <div className="cur-weather-condition">
          {Math.round(wData.temp)} |{wData.summary}
        </div>
        <HourlySlider values={6} setCurrentIndex={this.setCurrentIndex.bind(this)}/>
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
