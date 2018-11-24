import getTemperature from '../../utils/getTemperature'
// import PropTypes from 'prop-types'
import React from 'react'
import renderWeatherIcon from '../../utils/renderWeatherIcon'
import './CurrentWeather.css'

import { WeatherInjector } from '../../contexts/Weather'

// currently
  // apparentTemperature
  // icon
  // precipProbability
  // summary
  // temperature
  // windSpeed

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
    {({ currently, daily, isLoading }) => (
      console.log({ currently, daily, isLoading }) ||

      isLoading
      ? null // TODO: Replace with `LoadingIndicator`
      : (
        <div className="CurrentWeather">
          <div className="CurrentWeather_data">
            <div className="CurrentWeather_temperature">
              {
                getTemperature(
                  currently
                )
              }
            </div>
    
            <div className="CurrentWeather_outlook">
              <div className="CurrentWeather_extremeTemperatures">
                {Math.round(daily.data[0].temperatureLow || 0)}°F / {Math.round(daily.data[0].temperatureHigh || 0)}°F
              </div>
              <div className="CurrentWeather_precipitation">
                {
                  (
                    (
                      daily
                      .data[0]
                      .precipProbability
                      || 0
                    )
                    * 100
                  )
                  .toFixed(0)
                }
                % chance of {daily.data[0].precipType}
              </div>
            </div>
          </div>
    
          <div className="CurrentWeather_summary">
            {
              currently
              .summary
              || 'Loading...'
            }
          </div>
    
          <div className="CurrentWeather_icon">
            {
              renderWeatherIcon(
                currently
              )
            }
          </div>
        </div>
      )
    )}
  </WeatherInjector>
)

export default CurrentWeather
