import React from 'react';
import DailyListing from './dailyListing.js';
import PropTypes from 'prop-types';
import './dailyForecast.scss';

const DailyForecast = ({wData}) =>{

  const generateListings = (dailyData) =>{
    return dailyData.slice(0,Math.min(7, dailyData.length))
    .map((day,index)=><DailyListing key={index} day={day.time} high={day.high} low={day.low} summary={day.summary} icon={day.icon}/>)
  }
  if(!wData) return null;
  return(
    <div className ="daily-forecast-container module">
      <div className="headline">
        Upcoming Weather
      </div>
      <div className="daily-table">
        {generateListings(wData)}
      </div>
    </div>
  )
};

DailyForecast.propTypes = {
  wData:PropTypes.array.isRequired
}

export default DailyForecast;
