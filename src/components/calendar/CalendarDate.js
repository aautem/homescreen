import format from 'date-fns/format'
import React, { Fragment } from 'react'

import { DateConsumer, DateProvider } from '../contexts/DateContext'
import './CalendarDate.css'

const CalendarDate = () => (
  <DateProvider>
    <DateConsumer>
      {({ currentDate }) => (
        <Fragment>
          <div className="CalendarDate_ofWeek">
            {
              format(
                currentDate,
                'MMMM'
              )
            }
          </div>

          <div className="CalendarDate_number">
            {
              format(
                currentDate,
                'D'
              )
            }
          </div>

          <div className="CalendarDate_ofWeek">
            {
              format(
                currentDate,
                'dddd'
              )
            }
          </div>
        </Fragment>
      )}
      </DateConsumer>
  </DateProvider>
)

export default CalendarDate
