import React from 'react';

const HourlySlider = ({values, setCurrentIndex})=>{
  return(
    <div className="slider-container">
      <input type="range" min="0" max={values} value="0" step="1" onChange={(e)=>{setCurrentIndex(e.target.value)}} />
    </div>
  );
}

export default HourlySlider;
