const formatShortDate = (date)=>{
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
  let date = new Date(oldDate);
  const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayArray[date.getDay()];
}

export {
  formatShortDate,
  formatShortDay
};
