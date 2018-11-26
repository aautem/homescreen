import React from 'react'
import './Calendar.css'

import Event from './Event'

import {
  CalendarInjector,
  CalendarProvider,
} from '../../contexts/Calendar'

const Calendar = () => (
  <CalendarProvider>
    <div className="Calendar">
      <div className="Calendar_content">
        <div className="Calendar_events">
          <CalendarInjector>
            {({ events }) => (
              events
              .map(({ id, ...event }) => (
                <Event
                  key={id}
                  {...event}
                />
              ))
            )}
          </CalendarInjector>
        </div>

        <div className="Calendar_happeningSoon">
          Happening Soon
        </div>
      </div>
    </div>
  </CalendarProvider>
)

export default Calendar
