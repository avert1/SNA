import React from 'react';
import HistoricHeatDisplay from './historicHeatDisplay.js';
import {formatShortDate} from '../../Utilities/formatDate.js';
import {Line as LineChart} from 'react-chartjs-2';

//Responsible for rendering Historic heat display as well as chart of previous years
const HistoricWeather = ({wData, currentTemp, location})=>{
    let highs =  {
        label:"High",
        backgroundColor: 'rgba(255, 113, 113, 0.8)',
        data:[],
      },
      lows = {
        label:"Low",
        hidden:true,
        backgroundColor: 'rgba(100, 255, 255, 0.8)',
        data:[]
      };
    let labels = [];
    if(wData && wData.past){
      wData.past.forEach(day=>{
        highs.data.push(Math.round(day.high));
        lows.data.push(Math.round(day.low));
        labels.push(new Date(day.time).getFullYear());
      });
    }
    highs.data.reverse();
    lows.data.reverse();
    labels.reverse();

    let chartData = {
      labels,
      datasets: [highs, lows]
    }

    const options = {
      //width={150} height={150} options={{maintainAspectRatio:false, responsive:true}}
      responsive:true,
      maintainAspectRatio:false,
      legend:{
        position:'bottom'
      },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          }
        }],
        yAxes: [{
          gridLines: {
            display:false
          }
        }]
      }
    }

    return(
      <div className ="hist-weather-container module">
        <div className="page-header">
          Historic Weather
        </div>
        <div className="location-info">
          {location}
        </div>
        <HistoricHeatDisplay wData={wData.past} currentTemp={currentTemp} />
        <div className="hist-linechart-container module">
          <div className="headline">
            Historical temperatures for {formatShortDate(wData.past[0].time)}
          </div>
          <div className="hist-linechart">
            <LineChart data={chartData} options={options} />
          </div>
        </div>
      </div>
    );
}

export default HistoricWeather;
