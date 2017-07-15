'use strict'
import React from 'react';
const key = require('../../key.json');
const ReactDom = require('react-dom');

import InteractiveMap from '../Components/InteractiveMap/interactiveMap.js';
import WeatherModule from '../Components/WeatherModule/weatherModule.js';


/*fetch(`/data`)
.then((data)=>{
  ReactDom.render(
    (<div>
      <InteractiveMap />
      <WeatherModule />
    </div>),
    document.getElementById('root')
  );
});*/
ReactDom.render(
  (<WeatherModule />),
  document.getElementById('root')
);
