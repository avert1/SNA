const sassC = require('node-sass');
const fs = require('fs');

let css = sassC.renderSync({file:"./Components/CurrentWeather/currentWeather.scss"}).css;
css += sassC.renderSync({file:"./Components/InteractiveMap/interactiveMap.scss"}).css;
css += sassC.renderSync({file:"./Components/Icons/icons.scss"}).css;
css += sassC.renderSync({file:"./Components/DailyForecast/dailyForecast.scss"}).css;
css += sassC.renderSync({file:"./Components/HistoricWeather/historicWeather.scss"}).css;
css += sassC.renderSync({file:"./Components/Navigation/navigation.scss"}).css;
css += sassC.renderSync({file:"./Components/Search/search.scss"}).css;
css += sassC.renderSync({file:"./Components/Error/error.scss"}).css;
fs.writeFile(__dirname+'/public/styles/main.css', css);
console.log('sass compiled');
