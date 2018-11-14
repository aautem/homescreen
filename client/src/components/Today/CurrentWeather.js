import getTemperature from '../../utils/getTemperature'
// import PropTypes from 'prop-types'
import React from 'react'
import renderWeatherIcon from '../../utils/renderWeatherIcon'
import './CurrentWeather.css'

import { WeatherInjector } from '../../contexts/Weather'

const CurrentWeather = () => (
  <WeatherInjector>
    {({ currentWeather }) => (
      console.log({ currentWeather }) ||

      <div className="CurrentWeather">
        <div className="CurrentWeather_data">
          <div className="CurrentWeather_temperature">
            {
              getTemperature(
                currentWeather
              )
            }
          </div>
  
          <div className="CurrentWeather_outlook">
            <div className="CurrentWeather_extremeTemperatures">
              ##°F / ##°F
            </div>
            <div className="CurrentWeather_precipitation">
              ##% chance of rain
            </div>
          </div>
        </div>
  
        <div className="CurrentWeather_summary">
          {
            currentWeather
            .summary
            || 'Loading...'
          }
        </div>
  
        <div className="CurrentWeather_icon">
          {
            renderWeatherIcon(
              currentWeather
            )
          }
        </div>
      </div>
    )}
  </WeatherInjector>
)

export default CurrentWeather
