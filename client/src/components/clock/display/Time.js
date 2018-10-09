import format from 'date-fns/format'
import React from 'react'

import { DateTimeConsumer } from '../../contexts/DateTimeContext'
import { militaryTime } from '../../../config'
import './Time.css'

const formatDateTime = dateTime => (
  militaryTime
  ? (
    format(
      dateTime,
      'HHmm'
    )
  )
  : (
    format(
      dateTime,
      'hhmm'
    )
  )
)

const Time = () => (
  <DateTimeConsumer>
    {({ dateTime }) => (
      <div className="Time">
        {
          formatDateTime(
            dateTime
          )
          .split('')
          .map((digit, index) => (
            <div
              className="Time_digit"
              key={index}
            >
              {digit}
            </div>
          ))
        }
      </div>
    )}
  </DateTimeConsumer>
)

export default Time
