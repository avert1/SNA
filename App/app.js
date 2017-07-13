const express = require('express');
const App = express();
const key = require('../key.json');
const fetch = require('node-fetch');

App.use(express.static('public'));
App.get('/', function(req, res){
    res.sendFile(__dirname + '/Views/index.html');
});

App.get('/data', function(req, res){
  /*res.send({
    city:"Testa",
    state:"TE"
  });
  return;*/
  fetch(`https://api.darksky.net/forecast/${key.key}/37.8267,-122.4233`)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    let current = data.currently;
    let dailyData = data.daily.data.map(day =>(
      {
        time:new Date(1000*day.time),
        summary:day.summary,
        high:day.temperatureMax,
        low:day.temperatureMin,
      })
    );
    let currentTime=data.currently.time;
    let hourlyData=[
      //Add current data as first index of hourly
      {
        temp: data.currently.temperature,
        summary: data.currently.summary,
        description:data.minutely.summary,
        hi:data.daily.data[0].temperatureMax,
        low:data.daily.data[0].temperatureMin
      }
    ];
    data.hourly.data.map(hour =>{
      if(!currentTime || (currentTime && hour.time>currentTime))
        hourlyData.push({
          temp: hour.temperature,
          summary: hour.summary,
          description:hour.summary,
          high:hour.temperatureMax,
          low:hour.temperatureMin
        });
    })

    res.send({
      city:"Testa",
      state:"TE",
      daily:dailyData,
      current:hourlyData
    });
  });
});

App.get('/past', function(req,res){
  let arr = [];
  for(let i=0;i<9;i++){
    arr.push({
      time:new Date(1000*409467600),
      summary:"Hot AF",
      high:60 + Math.random()*20,
      low:50,
    });
  }
  res.send({
    past:arr
  }
  );
  /*
  fetch(`https://api.darksky.net/forecast/${key.key}/37.8267,-122.4233/${time}`)
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    let dailyData = data.daily.data.map(day =>(
      {
        time:day.time,
        summary:day.summary,
        high:day.temperatureMax,
        low:day.temperatureMin,
      })
    );

    res.send({
      past:pastData,
      current:hourlyData
    });
  });
  */
});

App.listen(3000, ()=>{
  console.log('listening on 3000');
});
