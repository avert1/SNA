import React from 'react';
import {formatShortDay} from '../../Utilities/formatDate.js';
import Icon from '../Icons/icon.js';

const DailyListing = ({day, high, low, summary, icon}) =>(
  <div className="daily-listing">
    <div className="header">
      {formatShortDay(day)}
    </div>
    <div className="daily-icon">
      <Icon name={icon} />
    </div>
    <div>{`${Math.round(high)}/${Math.round(low)}`}</div>
    <div className="daily-info">
      {summary}
    </div>
  </div>
);

export default DailyListing;
