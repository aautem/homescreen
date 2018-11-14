// import PropTypes from 'prop-types'
import React from 'react'
import './CurrentWeather.css'

import { FiSun } from 'react-icons/fi'

import {
  WeatherInjector,
  WeatherProvider,
} from '../../contexts/Weather'

const getTemperatureString = (
  ({ temperature }) => (
    String(
      Math.round(temperature)
    )
  )
)

const CurrentWeather = () => (
  <WeatherProvider>
    <WeatherInjector>
      {({ currentWeather }) => (
        <div className="CurrentWeather">
          <div className="CurrentWeather_data">
            <div className="CurrentWeather_temperature">
              {
                getTemperatureString(
                  currentWeather
                )
                .concat('°')
              }
            </div>
    
            <div className="CurrentWeather_outlook">
              <div className="CurrentWeather_extremeTemperatures">
                56° F / 72° F
              </div>
              <div className="CurrentWeather_precipitation">
                20% chance of rain
              </div>
            </div>
          </div>
    
          <div className="CurrentWeather_summary">
            {
              currentWeather
              .summary
            }
          </div>
    
          <div className="CurrentWeather_icon">
            <FiSun size="2em" />
          </div>
        </div>
      )}
    </WeatherInjector>
  </WeatherProvider>
)

export default CurrentWeather
