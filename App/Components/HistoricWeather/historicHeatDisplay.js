import React from 'react';
import {Doughnut as DChart} from 'react-chartjs-2';
import {formatShortDate} from '../../Utilities/formatDate.js';

//Renders current day's heat in comparison to past years
const HistoricHeatDisplay = ({wData, currentTemp})=>{

  if(!currentTemp) return null;

  const getHeatIndexInfo = (data, curTemp)=>{
    let pos = 1;
    data.forEach(day=>{
      pos += (day.high<curTemp)?1:0;
    });
    let type = 'low';
    let formattedIndex = pos;
    if(pos>(data.length+1)/2){
      formattedIndex = data.length+2 - pos;
      type = 'high';
    }
    let formattedPos="";
    switch(formattedIndex){
      //Case 1 is actually not necessary here. Leaving for clarity
      case 1:
        formattedPos = "";
        break;
      case 2:
        formattedPos = "2nd";
        break;
      case 3:
        formattedPos = "3rd";
        break;
      default:
        formattedPos = formattedIndex+"th";
    }
    let displayColor = 'rgb(0, 255, 0)';
    let upper = Math.round((data.length+1)*0.8);
    if(pos>(data.length+1)/2&&pos<=upper){
      displayColor = 'rgb(247, 244, 56)';
    } else if(pos>upper){
      displayColor = 'rgb(255, 0, 0)';
    }
    return {
      pos,
      type,
      formattedPos,
      displayColor
    }
  }

  const heatIndex = getHeatIndexInfo(wData, currentTemp);
  const cData = {
    datasets: [{
        backgroundColor: [heatIndex.displayColor, 'rgba(0, 0, 0, 0)'],
        borderColor: 'rgba(0, 0, 0, 0)',
        data: [heatIndex.pos, wData.length+1-heatIndex.pos]
    }]
  }

  return (
    <div className="hist-heat-comp module">
      <div className="heat-chart-container"><DChart data={cData} options={{maintainAspectRatio:false, responsive:true, tooltips:{enabled:false}}} /></div>
      <div className="heat-comp-text">
        This {formatShortDate(wData[0].time)} is the {heatIndex.type==='low'? heatIndex.formattedPos+ " coolest" : heatIndex.formattedPos + " hottest" } in the past {wData.length+1} years
      </div>
    </div>
  )
}

export default HistoricHeatDisplay;
