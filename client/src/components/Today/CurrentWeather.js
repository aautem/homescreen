import getTemperature from "../../utils/getTemperature";
// import PropTypes from 'prop-types'
import React from "react";
import renderWeatherIcon from "../../utils/renderWeatherIcon";
import "./CurrentWeather.css";

import { WeatherInjector } from "../../contexts/Weather";

const mockData = {
  alerts: [{ title: "Testing the alerts" }],
  currently: {
    // apparentTemperature: "",
    icon: "clear-night",
    // precipProbability: "",
    summary: "Slightly cloudy skies with a chance of rain",
    temperature: 84,
    // windSpeed: "",
  },
  daily: {
    data: [
      {
        precipProbability: 12,
        precipType: "rain",
        temperatureHigh: 101,
        temperatureLow: 62,
      },
    ],
  },
  hourly: {},
  isLoading: false,
};

// daily
// icon
// summary
// data
// icon
// moonPhase
// precipProbability
// precipType
// summary
// sunriseTime
// sunsetTime
// temeratureHigh
// temperatureLow
// windSpeed

// hourly
// icon
// summary
// data
// icon
// precipProbability
// summary
// temerature
// time
// windSpeed

const CurrentWeather = () => (
  <WeatherInjector>
    {({ alerts, currently, daily, isLoading }) =>
      // console.log({ alerts, currently, daily, isLoading }) ||

      mockData.isLoading ? null : ( // TODO: Replace with `LoadingIndicator`
        <div className="CurrentWeather">
          <div className="CurrentWeather_data">
            <div className="CurrentWeather_temperature">
              {getTemperature(mockData.currently)}
            </div>

            <div className="CurrentWeather_outlook">
              <div className="CurrentWeather_extremeTemperatures">
                {Math.round(mockData.daily.data[0].temperatureLow || 0)}°F /{" "}
                {Math.round(mockData.daily.data[0].temperatureHigh || 0)}°F
              </div>
              <div className="CurrentWeather_precipitation">
                {(
                  (mockData.daily.data[0].precipProbability || 0) * 100
                ).toFixed(0)}
                % chance of {mockData.daily.data[0].precipType}
              </div>
            </div>
          </div>

          <div className="CurrentWeather_description">
            <div className="CurrentWeather_summary">
              {mockData.currently.summary}
            </div>

            {mockData.alerts && (
              <div className="CurrentWeather_alert">
                {mockData.alerts[0].title}
              </div>
            )}
          </div>

          <div className="CurrentWeather_icon">
            {renderWeatherIcon(mockData.currently)}
          </div>
        </div>
      )
    }
  </WeatherInjector>
);

export default CurrentWeather;
