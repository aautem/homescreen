import React from 'react'
import { FiCloudDrizzle } from 'react-icons/fi'
import { FiCloudLightning } from 'react-icons/fi'
import { FiWind } from 'react-icons/fi'

import './Weather.css'

const mockWeatherData = [{
  title: 'Currently',
  Icon: FiCloudDrizzle,
  temperature: 68,
  summary: 'overcast',
}, {
  title: 'Tomorrow',
  Icon: FiCloudLightning,
  temperature: 72,
  summary: 'thunder storms',
}, {
  title: 'Tuesday',
  Icon: FiWind,
  temperature: 65,
  summary: 'windy',
}]

const Weather = () => (
  <div className="Weather">
    {
      mockWeatherData
      .map(({ title, Icon, temperature, summary }, index) => (
        <div
          className="Weather_forecast"
          key={index}
        >
          <div className="Weather_header">
            {title}
          </div>

        <div className="Weather_content">
          <Icon
            color="#ffffff"
            size={90}
          />
        </div>

          <div className="Weather_footer">
            <span className="Weather_temperature">
              {temperature}&deg; F
            </span>
            <span className="Weather_summary">
              {summary}
            </span>
          </div>
        </div>
      ))
    }
  </div>
)

export default Weather
