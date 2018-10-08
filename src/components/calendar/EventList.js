import React from 'react'

import './EventList.css'

const EventList = () => (
  <div className="EventList">
    <div className="EventList_day">
      Today
    </div>

    <div className="EventList_entry">
      <span>ALL-DAY</span>
      <span>Kai Flea/Tick (Extra info like notes goes here)</span>
    </div>

    <div className="EventList_entry">
      <span>ALL-DAY</span>
      <span>Kai Flea/Tick (Extra info like notes goes here)</span>
    </div>

    <div className="EventList_day">
      Tomorrow
    </div>

    <div className="EventList_entry">
      <span>ALL-DAY</span>
      <span>Kai Flea/Tick (Extra info like notes goes here)</span>
    </div>
  </div>
)

export default EventList
