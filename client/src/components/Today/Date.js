import format from 'date-fns/format'
import React from 'react'
import './Date.css'

import { DateTimeInjector } from '../../contexts/DateTime'
import { WeatherInjector } from '../../contexts/Weather'

const dateFormat = 'ddd, MMM DD'

const Date = () => (
  <div className="Date">
    <DateTimeInjector>
      {({ dateTime }) => (
        <div className="Date_today">
          {
            format(
              dateTime,
              dateFormat,
            )
          }
        </div>
      )}
    </DateTimeInjector>

    <WeatherInjector>
      {({ alerts, isLoading }) => (
        isLoading
        ? null // TODO: Replace with `LoadingIndicator`
        : (
          <div className="Date_alert">
            {
              alerts[0]
              ? alerts[0].title
              : ''
            }
          </div>
        )
      )}
    </WeatherInjector>
  </div>
)

export default Date
