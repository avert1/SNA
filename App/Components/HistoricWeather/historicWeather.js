import React from 'react';
import HistoricHeatDisplay from './historicHeatDisplay.js';
import {formatShortDate} from '../../Utilities/formatDate.js';
import {Line as LineChart} from 'react-chartjs-2';

const HistoricWeather = ({wData, currentTemp, location}) => {
  const generateChartData = (data)=>{
    let tempData = {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      data:[]
    }
    let labels=[];
    data.forEach(day=>{
      tempData.data.push(day.high);
      labels.push(new Date(1000*day.time).getFullYear());
    });


    return {
      labels,
      datasets:[
        tempData
      ]
    };
  }

  const options = {
    //width={150} height={150} options={{maintainAspectRatio:false, responsive:true}}
    responsive:true,
    maintainAspectRatio:false,
    legend:{
      display:false
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
          <LineChart data={generateChartData(wData.past)} options={options} />
        </div>
      </div>
    </div>
  );
}

export default HistoricWeather;
