// import PropTypes from 'prop-types'
import React from 'react'
import './CurrentWeather.css'

import { FiSun } from 'react-icons/fi'

const CurrentWeather = () => (
  <div className="CurrentWeather">
    <div className="CurrentWeather_data">
      <div className="CurrentWeather_temperature">
        72°
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
      Sunny Skies
    </div>

    <div className="CurrentWeather_icon">
      <FiSun size="2em" />
    </div>
  </div>
)

export default CurrentWeather
