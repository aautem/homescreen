// import PropTypes from 'prop-types'
import React from 'react'
import './CurrentWeather.css'

import {
  FiCloud,
  FiCloudDrizzle,
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiHelpCircle,
  FiMoon,
  FiSun,
  FiSunrise,
  FiSunset,
  FiWind,
} from 'react-icons/fi'

import {
  WeatherInjector,
  WeatherProvider,
} from '../../contexts/Weather'

// TODO: Map icon names
const icons = {
  'clear-night': FiMoon,
}

const getTemperatureString = (
  ({ temperature }) => (
    String(
      Math.round(temperature)
    )
  )
)

const renderIcon = (
  ({ icon }) => (
    icons[icon]
    ? (
      icons[icon]({
        size: '2em',
      })
    )
    : <FiHelpCircle size="2em" />
  )
)

const CurrentWeather = () => (
  <WeatherProvider>
    <WeatherInjector>
      {({ currentWeather }) => (
        console.log({ currentWeather }) ||

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
            {
              renderIcon(
                currentWeather
              )
            }
          </div>
        </div>
      )}
    </WeatherInjector>
  </WeatherProvider>
)

export default CurrentWeather
