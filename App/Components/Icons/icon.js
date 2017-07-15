import React from 'react';

const Icon = ({name}) => {
  let icon = null;
  switch (name) {
    case "clear-day":
      icon =(
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case "clear-night":
      icon =(
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case "rain":
      icon =(
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );
      break;
    case "snow":
      icon =(
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
      break;
    case "sleet":
      icon =(
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
      break;
    case "wind":
      icon =(
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case "fog":
      icon =(
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case "cloudy":
      icon =(
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
      break;
    case "partly-cloudy-day":
      icon =(
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case "partly-cloudy-night":
      icon =(
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;
    case "loading":
      icon =(
        <div className="loading-container">
          <div className="loading">
            <div className="hole"></div>
          </div>
        </div>
      );
      break;
    default:
      icon =(
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
      break;

  }
  return icon;
}

export default Icon;
