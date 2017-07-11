const express = require('express');
const App = express();

App.use(express.static('public'));
App.get('/', function(req, res){
    res.sendFile(__dirname + '/Views/index.html');
});

App.listen(3000, ()=>{
  console.log('listening on 3000');
});
