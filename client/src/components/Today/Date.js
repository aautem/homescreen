import format from 'date-fns/format'
import React from 'react'
import './Date.css'

import { DateTimeInjector } from '../../contexts/DateTime'

const dateFormat = 'ddd, MMM DD'

const Date = () => (
  <DateTimeInjector>
    {({ dateTime }) => (
      <div className="Date">
        {
          format(
            dateTime,
            dateFormat,
          )
        }
      </div>
    )}
  </DateTimeInjector>
)

export default Date
