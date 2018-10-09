import format from 'date-fns/format'
import React from 'react'

import { DateTimeConsumer } from '../contexts/DateTimeContext'
import './CalendarDate.css'

const CalendarDate = () => (
  <DateTimeConsumer>
    {({ dateTime }) => (
      <div className="CalendarDate">
        <div className="CalendarDate_ofWeek">
          {
            format(
              dateTime,
              'MMMM'
            )
          }
        </div>

        <div className="CalendarDate_number">
          {
            format(
              dateTime,
              'D'
            )
          }
        </div>

        <div className="CalendarDate_ofWeek">
          {
            format(
              dateTime,
              'dddd'
            )
          }
        </div>
      </div>
    )}
    </DateTimeConsumer>
)

export default CalendarDate
