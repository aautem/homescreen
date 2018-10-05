import format from 'date-fns/format'
import React from 'react'

import { DateTimeConsumer } from '../../contexts/DateTimeContext'
import './Time.css'

const Time = () => (
  <DateTimeConsumer>
    {({ dateTime }) => (
      <div className="Time">
        {
          format(
            dateTime,
            'HHmm'
          )
          .split('')
          .map((digit, index) => (
            <div key={index}>
              {digit}
            </div>
          ))
        }
      </div>
    )}
  </DateTimeConsumer>
)

export default Time
