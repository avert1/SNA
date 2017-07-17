import React from 'react';
import {formatShortDay} from '../../Utilities/formatDate.js';
import Icon from '../Icons/icon.js';

//Responsible for rendering a specific day's weather
const DailyListing = ({day, high, low, summary, icon}) =>(
  <div className="daily-listing">
    <div className="header">
      {formatShortDay(day)}
    </div>
    <div className="daily-icon">
      <Icon name={icon} />
    </div>
    <div><span className="temp">{Math.round(high)}</span>/<span className="temp">{Math.round(low)}</span></div>
    <div className="daily-info">
      {summary}
    </div>
  </div>
);

export default DailyListing;
