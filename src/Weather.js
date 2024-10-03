import React from "react";
import "./Weather.css";
/*import axios from "axios"; */
/*import ReactAnimatedWeather from 'react-animated-weather';*/


export default function Weather(props) {
    return (
      <div className="Main">
        <body>
          <div className="weather-page">
            <header>
              <form className="search-bar" id="search-form">
                <input
                  type="text"
                  placeholder="Enter city..."
                  required
                  id="new-city"
                  className="search-input"
                />
                <input type="submit" value="Search" class="search-button" />
              </form>
            </header>
                                                                
            <main>
              <div className="weather-data">
                <div>
                  <h1 id="city-name" className="weather-city">
                    {" "}
                    Paris
                  </h1>
                  <p className="weather-details">
                    <span id="time">{props.currentTime} PM</span>
                    <span id="description">,{props.description}</span>
                    <br />
                    Humidity: <strong id="humidity">{props.humidity}%</strong>,
                    Wind: <strong id="wind">{props.wind} km/h</strong>
                  </p>
                </div>
                <div className="current-temperature-container">
                  <div id="icon"></div>
                  <div className="temperature-value" id="temperature"></div>
                  <div className="temperature-unit"> {props.temperature}°C</div>
                </div>
              </div>
  
              <div className="weather-forecast" id="forecast"></div>
            </main>
          </div>
        </body>
      </div>
    );
  }