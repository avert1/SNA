import React from 'react';
import DailyListing from './dailyListing.js';

const DailyForecast = ({wData}) =>{

  const generateListings = (dailyData) =>{
    return dailyData.slice(0,Math.min(7, dailyData.length)).map(day=><DailyListing day={day.time} high={day.high} low={day.low} summary={day.summary}/>)
  }

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

export default DailyForecast;
