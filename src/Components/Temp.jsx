import React from "react";
import humid from "./images/humid.png";
import wind from "./images/wind.png";
import tempicon from "./images/temp.png";
import { cleanTime, weatherIcons } from "./Script";

function Temp({weather:{temp, details, feels_like, temp_min, temp_max, humidity, speed, sunrise, sunset,icon}}) {
  return (
    <div>
      <div className="flex items-center justify-center py-1 text-xl text-cyan-200">
       {`${details}`}
      </div>
      <div className="flex flex-row items-center justify-around text-white">
        <img src={weatherIcons(icon)} alt="" className="w-38" />
        <p className="text-5xl">{`${temp.toFixed()}`}&#176;</p>        
      </div>

      <div className="flex flex-row item-center justify-center space-x-4 text-white py-1">
        <div className="flex font-light text-sm items-center justify-start transition ease-out hover:scale-105 cursor-pointer">
          <img src={tempicon} alt="" className="w-7 mr-1" />
          Feels like
          <span className="font-medium ml-1">{feels_like.toFixed()}&#176;</span>
        </div>
        <p className="font-light">|</p>
        <div className="flex font-light text-sm items-center justify-start transition ease-out hover:scale-105 cursor-pointer">
          <img src={wind} alt="" className="w-7 mr-1" />
          Wind
          <span className="font-medium ml-1">{speed.toFixed()} km/hr</span>
        </div>
        <p className="font-light">|</p>
        <div className="flex font-light text-sm items-center justify-start transition ease-out hover:scale-105 cursor-pointer">
          <img src={humid} alt="" className="w-7 mr-1" />
          Humidity
          <span className="font-medium ml-1">{humidity.toFixed()}%</span>
        </div>
      </div>

      <div className="flex flex-row item-center justify-center space-x-2 text-white py-3">
        <p className="text-sm font-light">
          Sunrise <span className="text-sm font-medium ml-1">{cleanTime(sunrise)}</span>
        </p>
        <p className="font-light">|</p>
        <p className="text-sm font-light">
          Sunset <span className="text-sm font-medium ml-1">{cleanTime(sunset)}</span>
        </p>
        <p className="font-light">|</p>
        <p className="text-sm font-light">
          Max Temp<span className="text-sm font-medium ml-1">{temp_max.toFixed()}&#176;</span>
        </p>
        <p className="font-light">|</p>
        <p className="text-sm font-light">
          Min Temp <span className="text-sm font-medium ml-1">{temp_min.toFixed()}&#176;</span>
        </p>
      </div>
    </div>
  );
}

export default Temp;