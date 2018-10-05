import React from 'react'

import Clock from './clock/Clock'
import CalendarDate from './calendar/CalendarDate'
import EventList from './calendar/EventList'
// import Inbox from './email/Inbox'
import Header from './layout/Header'
// import Menu from './menu/Menu'
// import NewReleases from './media/NewReleases'
// import News from './news/News'
import NextEvent from './calendar/NextEvent'
// import Stocks from './stocks/Stocks'
// import UpcomingEvents from './calendar/UpcomingEvents'
import Weather from './weather/Weather'
import './App.css'

const App = () => (
  <div className="App">
    <div className="App_top">
      <div className="App_topLeft">
        <CalendarDate />
        <NextEvent />
      </div>

      <div className="App_topRight">
        {/* <Header />
        <Weather />
        <EventList /> */}
      </div>
    </div>

    <div className="App_middle">
      <Clock />
    </div>

    <div className="App_bottom">
      {/* <Stocks />

      <div className="App_bottomRow">
        <div className="App_bottomColumn">
          <Inbox />
          <NewReleases />
        </div>

        <Menu />
      </div>

      <div className="App_bottomRow">
        <News />
        <UpcomingEvents />
      </div> */}
    </div>
  </div>
)

export default App
