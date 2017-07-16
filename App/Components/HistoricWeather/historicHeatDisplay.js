import React from 'react';
import {Doughnut as DChart} from 'react-chartjs-2';
import {formatShortDate} from '../../Utilities/formatDate.js';


const HistoricHeatDisplay = ({wData, currentTemp})=>{
  const getHeatIndexInfo = (data, curTemp)=>{
    let pos = 1;
    data.forEach(day=>{
      pos += (day.high<curTemp)?1:0;
    });
    let formattedPos="";
    switch(pos){
      //Case 1 is actually not necessary here. Leaving for clarity
      case 1:
        formattedPos = "";
        break;
      case 2:
        formattedPos = "2nd";
      case 3:
        formattedPos = "3rd";
        break;
      default:
        formattedPos = pos+"th";
    }
    let displayColor = 'rgb(0, 255, 0)';
    if(pos>5&&pos<=7){
      displayColor = 'rgb(247, 244, 56)'
    } else if(pos>7){
      displayColor = 'rgb(255, 0, 0)';
    }
    return {
      pos,
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
        This {formatShortDate(wData[0].time)} is the {heatIndex.pos<6? heatIndex.formattedPos+ " coolest" : wData.length+2 - heatIndex.pos + " hottest" } in the past {wData.length+1} years
      </div>
    </div>
  )
}

export default HistoricHeatDisplay;
