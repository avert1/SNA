import React from 'react';
import {formatShortDay} from '../../Utilities/formatDate.js';

const DailyListing = ({day, high, low, summary}) =>(
  <div className="daily-listing">
    <div className="header">
      {formatShortDay(day)}
    </div>
    <div className="daily-icon">
      <div className="icon sun-shower">
      <div className="cloud"></div>
      <div className="sun">
        <div className="rays"></div>
      </div>
      <div className="rain"></div>
      </div>
    </div>
    <div>{`${Math.round(high)}/${Math.round(low)}`}</div>
    <div className="daily-info">
      {summary}
    </div>
  </div>
);

export default DailyListing;
