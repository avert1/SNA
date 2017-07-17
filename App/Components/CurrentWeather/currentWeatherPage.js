import React from 'react';
import CurrentWeatherBox from './currentWeatherBox.js'
import DailyForecast from '../DailyForecast/dailyForecast.js';
import Error from '../Error/error.js';
import Icon from '../Icons/icon.js';
import PropTypes from 'prop-types';
import './currentWeather.scss';

const CurrentWeatherPage = ({wData, location}) =>{

  if(wData && Object.keys(wData).length === 0){
    return (<Icon name="loading"/>);
  } else if(wData){
    return (
      <div className ="cur-weather-container module">
        <div className="page-header">
          Current Weather
        </div>
        <div className="location-info">
          {location}
        </div>
        <CurrentWeatherBox wData={wData.hourlyData} />
        <DailyForecast wData={wData.dailyData}/>
      </div>
    );
  }
  return (
    <Error message={"There was a problem receiving the current data for "+ location + '!'} />
  );
};

CurrentWeatherPage.propTypes = {
  wData:PropTypes.object,
  location:PropTypes.string
}

export default CurrentWeatherPage;
