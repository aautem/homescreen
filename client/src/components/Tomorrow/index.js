import React from 'react'
import renderWeatherIcon from '../../utils/renderWeatherIcon'
import './Tomorrow.css'

// import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { WeatherInjector } from '../../contexts/Weather'

const Tomorrow = () => (
  <WeatherInjector>
    {({ daily, hourly, isLoading }) => (
      console.log({ daily, hourly }) ||

      <div className="Tomorrow">
        <div className="Tomorrow_content">
          <div className="Tomorrow_temperature">
            {
              !isLoading
              && renderWeatherIcon(hourly)
            }
          </div>
          <div className="Tomorrow_labels">
            <div className="Tomorrow_topLabel">
              {hourly.summary}

              {/* <FiChevronsLeft />
              Tonight */}
            </div>
            <div className="Tomorrow_bottomLabel">
              {daily.summary}

              {/* Tomorrow
              <FiChevronsRight /> */}
            </div>
          </div>
          <div className="Tomorrow_icon">
            {
              !isLoading
              && renderWeatherIcon(daily)
            }
          </div>
        </div>
      </div>
    )}
  </WeatherInjector>
)

export default Tomorrow
