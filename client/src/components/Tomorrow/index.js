import getTemperature from '../../utils/getTemperature'
import React from 'react'
import renderWeatherIcon from '../../utils/renderWeatherIcon'
import './Tomorrow.sass'

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { WeatherInjector } from '../../contexts/Weather'

const Tomorrow = () => (
  <WeatherInjector>
    {weather => (
      console.log({ weather }) ||

      <div className="Tomorrow">
        <div className="Tomorrow_content">
          <div className="Tomorrow_temperature">
            {
              getTemperature({
                temperature: 0,
              })
            }
          </div>
          <div className="Tomorrow_labels">
            <div className="Tomorrow_topLabel">
              <FiChevronsLeft />
              Tonight
            </div>
            <div className="Tomorrow_bottomLabel">
              Tomorrow
              <FiChevronsRight />
            </div>
          </div>
          <div className="Tomorrow_icon">
            {
              renderWeatherIcon({
                icon: 'Clear',
              })
            }
          </div>
        </div>
      </div>
    )}
  </WeatherInjector>
)

export default Tomorrow
