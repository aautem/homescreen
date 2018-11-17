// colorId: '9' (9 === Blueberry??)
// description: 'this is a description',
//   summary: 'Grocery Shopping',         
//   start: { date: '2018-11-18' },       
//   end: { date: '2018-11-19' },         
// //   start:                             
// //    { dateTime: '2018-11-19T09:45:00-0
// //      timeZone: 'America/Chicago' },  
// //   end:                               
// //    { dateTime: '2018-11-19T10:00:00-0
// //      timeZone: 'America/Chicago' },  
// location: 'CP Conference Room',

import React, { Component, createContext } from 'react'

const apiAddress = 'http://localhost:3000/api/calendar'
const fetchDelay = 300000
const CalendarContext = createContext()

export const CalendarInjector = (
  CalendarContext.Consumer
)

export class CalendarProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { events: [] }
    this.fetchCalendarOnDelay = this.fetchCalendarOnDelay.bind(this)
  }

  componentDidMount() {
    this.fetchCalendarOnDelay()
  }

  fetchCalendarOnDelay() {
    get(apiAddress)
    .then(({ data }) => {
      console.log({ calendarData: data.items })

      this.setState({
        events: data.items,
      })
    })
    .catch(console.error)

    setTimeout(
      this.fetchCalendarOnDelay,
      fetchDelay,
    )
  }

  render() {
    return (
      <CalendarContext.Provider
        value={this.state}
      >
        {
          this
          .props
          .children
        }
      </CalendarContext.Provider>
    )
  }
}

// colorId: '9'
// description: 'this is a description',
// location: 'CP Conference Room',
//   kind: 'calendar#event',              
//   etag: '"3077337348791000"',          
//   id: '05j35smnonuj17767rb794l0ea_20181
//   status: 'confirmed',                 
//   htmlLink: 'https://www.google.com/cal
//   leEBt',                                   
//   created: '2018-09-21T16:35:51.000Z', 
//   updated: '2018-10-17T15:19:56.803Z', 
//   summary: 'Grocery Shopping',         
//   creator:                             
//     { email: 'autem.alex@gmail.com',    
//       displayName: 'Alex Autem',        
//       self: true },                     
//   organizer:                           
//     { email: 'autem.alex@gmail.com',    
//       displayName: 'Alex Autem',        
//       self: true },                     

//   start: { date: '2018-11-18' },       
//   end: { date: '2018-11-19' },         
// //   start:                             
// //    { dateTime: '2018-11-19T09:45:00-0
// //      timeZone: 'America/Chicago' },  
// //   end:                               
// //    { dateTime: '2018-11-19T10:00:00-0
// //      timeZone: 'America/Chicago' },  

//   recurringEventId: '05j35smnonuj17767r
//   originalStartTime: { date: '2018-11-1
//   iCalUID: '05j35smnonuj17767rb794l0ea@
//   sequence: 1,                         
//   extendedProperties: { private: [Objec
//   guestsCanInviteOthers: false,        
//   guestsCanSeeOtherGuests: false,      
//   reminders: { useDefault: false } }
