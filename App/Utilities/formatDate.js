const formatShortDate = (date)=>{
  if(!date) return null;
  if(!(date instanceof Date))return null;
  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateSuffix = ["st", "nd", "rd"];
  let curDate=date.getDate(), suffix= "th";
  if(curDate<3){
    suffix=dateSuffix[day];
  }
  return monthArray[date.getMonth()] + " " + curDate+suffix;
}

const formatShortDay = (oldDate)=>{
  if(!oldDate) return null;
  let date = new Date(oldDate);
  const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayArray[date.getDay()];
}

const formatLongDay = (oldDate)=> {
  if(!oldDate) return null;
  let date = new Date(oldDate);
  const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return dayArray[date.getDay()];
}

const formatHour = (oldDate)=> {
  if(!oldDate) return null;
  let date = new Date(oldDate);
  let hour = date.getHours();
  let suffix = (hour > 12)?' PM':' AM';
  if(hour>12){
    hour -=12;
  } else if (hour === 0) {
    hour = 12;
  }
  return hour + suffix;
}

export {
  formatShortDate,
  formatShortDay,
  formatLongDay,
  formatHour,
};
