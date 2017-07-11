'use strict'
import React from 'react';
const ReactDom = require('react-dom');

import CurrentWeatherBox from '../Components/CurrentWeatherBox/currentWeatherBox.js';

ReactDom.render(
    (<div>
      <CurrentWeatherBox />
    </div>),
    document.getElementById('root')
  );
