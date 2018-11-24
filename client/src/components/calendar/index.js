import React from 'react'
import './Calendar.sass'

const schedule = [
  {
    colorId: '9',
    description: 'This is a description',
    end: { date: '2018-11-19' },
    id: '00sma1pl43r9kalima4hpuriqd_20181121T133000Z',
    location: 'CP Conference Room',
    start: { date: '2018-11-18' },
    summary: 'Grocery Shopping',
  },
  {
    description: 'This is a description',
    end: { dateTime: '2018-11-21T08:30:00-06:00' },
    id: '05j35smnonuj17767rb794l0ea_20181118',
    location: 'CP Conference Room',
    start: { dateTime: '2018-11-21T07:30:00-06:00' },
    summary: 'Other event',
  },
]

const Calendar = () => (
  <div className="Calendar">
    <div className="Calendar_content">
      <div className="Calendar_events">
        {
          schedule
          .map(event => (
            <div className="Event" key={event.id}>
              {event.summary}
            </div>
          ))
        }
      </div>
      <div className="Calendar_happeningSoon">
        Happening Soon
      </div>
    </div>
  </div>
)

export default Calendar
