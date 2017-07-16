'use strict'
import React from 'react';
const ReactDom = require('react-dom');
import WeatherModule from '../Components/WeatherModule/weatherModule.js';
//Promises for IE 11.
import Promise from 'promise-polyfill';
import 'whatwg-fetch';


if(!window.Promise){
  window.Promise = Promise;
}
ReactDom.render(
  (<WeatherModule />),
  document.getElementById('root')
);
