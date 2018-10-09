import React from 'react'
import { FiCloud } from 'react-icons/fi'
import { FiCloudDrizzle } from 'react-icons/fi'
// import { FiCloudLightning } from 'react-icons/fi'
// import { FiWind } from 'react-icons/fi'
import { FiHelpCircle } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'

import './Weather.css'

import {
  WeatherConsumer,
  WeatherProvider,
} from '../contexts/WeatherContext'

const weatherIcons = {
  'clear-day': FiSun,
  'partly-cloudy-day': FiCloud,
  'partly-cloudy-night': FiCloud,
  'rain': FiCloudDrizzle,
}

const Weather = () => (
  <WeatherProvider>
    <WeatherConsumer>
      {({ currentWeather, forecast }) => (
        console.log({ currentWeather, forecast }) ||

        <div className="Weather">
          {
            currentWeather.summary
            && (
              <div className="Weather_forecast">
                <div className="Weather_header">
                  Currently
                </div>

                <div className="Weather_content">
                  {
                    weatherIcons[currentWeather.icon]
                    ? (
                      weatherIcons[currentWeather.icon]({
                        color: '#ebebeb',
                        size: 90,
                      })
                    )
                    : (
                      <FiHelpCircle
                        color="#ebebeb"
                        size={90}
                      />
                    )
                  }
                </div>

                <div className="Weather_footer">
                  {currentWeather.summary}
                </div>
              </div>
            )
          }

          {
            forecast
            .map((weather, index) => ({
              ...weather,
              index,
            }))
            .map(({
              icon,
              summary,
              temperatureHigh,
              temperatureLow,
              index,
            }) => (
                <div
                  className="Weather_forecast"
                  key={index}
                >
                  <div className="Weather_header">
                    {
                      index === 0
                      ? 'Tomorrow'
                      : 'Wednesday'
                    }
                  </div>
      
                  <div className="Weather_content">
                    {
                      weatherIcons[icon]
                      ? (
                        weatherIcons[icon]({
                          color: '#ebebeb',
                          size: 90,
                        })
                      )
                      : (
                        <FiHelpCircle
                          color="#ebebeb"
                          size={90}
                        />
                      )
                    }
                  </div>
      
                  <div className="Weather_footer">
                    {summary}
                  </div>
                </div>
            ))
          }
        </div>
      )}
    </WeatherConsumer>
  </WeatherProvider>
)

export default Weather
