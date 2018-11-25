import format from 'date-fns/format'
import React from 'react'
import './Calendar.css'

import {
  CalendarInjector,
  CalendarProvider,
} from '../../contexts/Calendar'

// colorId: '9',
// description: 'This is a description',
// end: { date: '2018-11-19' },
// id: '00sma1pl43r9kalima4hpuriqd_20181121T133000Z',
// location: 'CP Conference Room',
// start: { date: '2018-11-18' },
// summary: 'Grocery Shopping',

const Calendar = () => (
  <CalendarProvider>
    <CalendarInjector>
      {({ events }) => (
        console.log({ events }) ||

        <div className="Calendar">
          <div className="Calendar_content">
            <div className="Calendar_events">
              {
                events
                .map(({
                  description,
                  id,
                  location,
                  start,
                  summary,
                }) => (
                  <div
                    className="Event"
                    key={id}
                  >
                    <div className="Event_time">
                      {
                        start
                        .dateTime
                        ? (
                          format(
                            start.dateTime,
                            'h:mma',
                          )
                        )
                        : 'All-Day'
                      }
                    </div>
                    
                    <div className="Event_summary">
                      <div className="Event_title">
                        {summary}
                      </div>

                      <div className="Event_location">
                        {location || 'Kansas City'}
                      </div>

                      <div className="Event_description">
                        {description || 'This is a simple event description'}
                      </div>
                    </div>
                  </div>




                  // <div className="Event" key={id}>
                  //   <div className="Event_summary">
                  //     <div className="Event_time">
                  //       {
                  //         start
                  //         .dateTime
                  //         ? (
                  //           format(
                  //             start.dateTime,
                  //             'h:mma',
                  //           )
                  //         )
                  //         : 'All-Day'
                  //       }
                  //     </div>
                  //     <div className="Event_title">
                  //       {summary}
                  //     </div>
                  //   </div>

                  //   <div className="Event_location">
                  //     {location || 'Kansas City'}
                  //   </div>

                  //   <div className="Event_description">
                  //     {description || 'This is a simple event description'}
                  //   </div>
                  // </div>
                ))
              }
            </div>
            <div className="Calendar_happeningSoon">
              Happening Soon
            </div>
          </div>
        </div>
      )}
    </CalendarInjector>
  </CalendarProvider>
)

export default Calendar
