const express = require('express');
const App = express();
const key = require('../key.json');
const fetch = require('node-fetch');

App.use(express.static('public'));
App.get('/', function(req, res){
    res.sendFile(__dirname + '/Views/index.html');
});

App.get('/data/', function(req, res){
  /*res.send({
    city:"Testa",
    state:"TE"
  });
  return;*/
  if(!req.query.lat || !req.query.lng){
    return res.status(400).send('Missing Params');
  }
  console.log("Getting location for: " + req.query.lat +  " " + req.query.lng);
  fetch(`https://api.darksky.net/forecast/${key.key}/${req.query.lat},${req.query.lng}?exclude=alerts,flags,`)
  //fetch(`https://api.darksky.net/forecast/${key.key}/37.8267,-122.4233`)
  .then(response => {
    //console.log(response);
    if(response.ok) {
      return response.json()
      .then(data => {
        //console.log(data);
        let current = data.currently;
        let dailyData = data.daily.data.map(day =>(
          {
            time:new Date(1000*day.time),
            summary:day.summary,
            icon:day.icon,
            high:day.temperatureMax,
            low:day.temperatureMin,
          })
        );
        let currentTime=data.currently.time;

        let hourlyData = [
            //Add current data as first index of hourly
            {
              temp: data.currently.temperature,
              time:new Date(1000*data.currently.time),
              icon: data.currently.icon,
              summary: data.currently.summary,
              description:data.minutely.summary,
              hi:data.daily.data[0].temperatureMax,
              low:data.daily.data[0].temperatureMin
            }
        ];
        data.hourly.data.map(hour =>{
          if(!currentTime || (currentTime && hour.time>currentTime))
            hourlyData.push({
              time:new Date(1000*hour.time),
              icon: hour.icon,
              temp: hour.temperature,
              summary: hour.summary,
              description:hour.summary,
              high:hour.temperatureMax,
              low:hour.temperatureMin
            });
        })

        res.send({
          dailyData,
          hourlyData
        });
      });
    }
    else {
      return res.status(404).send('Current Data Error');
    }
  })
  .catch(err=>{
    res.status(404).send('Current Data Error');
    return;
  });
});


App.get('/past', function(req,res){

  if(!req.query.lat || !req.query.lng){
    return res.status(400).send('Missing Params');
  }
  console.log("Getting location for: " + req.query.lat +  " " + req.query.lng);
  let pastDataCall = (date)=>  {
  console.log("date:");
  console.log(date);
  return fetch(`https://api.darksky.net/forecast/${key.key}/${req.query.lat},${req.query.lng},${date}?exclude=currently,alerts,flags,hourly`)
  //fetch(`https://api.darksky.net/forecast/${key.key}/37.8267,-122.4233`)
  .then(response => {
    if(response.ok) {
      return response.json()
      .then(data => {
        return data;
      });
    }
    else {
      console.log(response);
      throw 'error retreiving data, did not return with 200 status';
    }
  })
  .catch(err=>{
    console.log(err);
    throw 'error getting data';
  })};

  let promises = [];
  let curTime = new Date();
  for(let i=0;i<2;i++){
    curTime.setFullYear(curTime.getFullYear()-1);
    promises.push(pastDataCall(Math.round(curTime.getTime()/1000)));
  }

  Promise.all(promises).then(data=>{
    let pastArray = [];
    for(let i = 0;i<data.length;i++){
      let day = data[i].daily.data[0];
      if(day){
        pastArray.push({
          time:new Date(1000*day.time),
          high:day.temperatureMax,
          low:day.temperatureMin,
        });
      }
    }
    res.send({
      past:pastArray
    })
  })
  .catch(err=>{
    res.status(404).send('Past Data Error');
    return;
  });



  /*let arr = [];
  for(let i=0;i<9;i++){
    arr.push({
      time:new Date(1000*409467600),
      summary:"Hot AF",
      high:60 + Math.random()*20,
      low:50+ Math.random()*20,
    });
  }
  res.send({
    city:"Testa",
    state:"TE",
    past:arr
  }
);*.
  /*
  fetch(`https://api.darksky.net/forecast/${key.key}/37.8267,-122.4233/${time}`)
  .then(response => {
    //console.log(response);
    if(response.ok)return response.json();
      //Otherwise error out
      res.status(404).send('Past Data Error');
      return;
  })
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
