import getTemperature from '../../utils/getTemperature'
// import PropTypes from 'prop-types'
import React from 'react'
import renderWeatherIcon from '../../utils/renderWeatherIcon'
import './Tomorrow.css'

import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { WeatherInjector } from '../../contexts/Weather'

const Tomorrow = () => (
  <WeatherInjector>
    {({forecast: [today = {}, tomorrow = {}] }) => (
      console.log({ today, tomorrow }) ||

      <div className="Tomorrow">
        <div className="Tomorrow_content">
          <div className="Tomorrow_temperature">
            {
              getTemperature({
                temperature: (
                  today.temperatureLow
                  || 0
                ),
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
              renderWeatherIcon(
                tomorrow
              )
            }
          </div>
        </div>
      </div>
    )}
  </WeatherInjector>
)

export default Tomorrow
