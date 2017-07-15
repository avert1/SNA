import React from 'react';
import HistoricWeather from '../HistoricWeather/historicWeather.js';
import Error from '../Error/error.js';
import Icon from '../Icons/icon.js';


//Currently the only use for this file is to render loading and error bars.
//I plan on decomposing the HistoricWeather module into multiple parts.
const HistoricWeatherPage = ({wData, currentTemp, location}) =>{
  if(wData && Object.keys(wData).length === 0){
    return (<Icon name="loading"/>);
  } else if(wData){
    return (
        <HistoricWeather wData={wData} currentTemp={currentTemp} location={location}/>
    );
  }
  return (
    <Error message={"There was a problem receiving the historic data for this location!"} />
  );
};

export default HistoricWeatherPage;
