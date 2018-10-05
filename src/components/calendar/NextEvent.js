import React from 'react'

import './NextEvent.css'

const NextEvent = () => (
  <div className="NextEvent">
    <div className="NextEvent_header">
      Up Next
    </div>

    <div className="NextEvent_event">
      <div className="NextEvent_time">
        7:30a
      </div>
      <div className="NextEvent_title">
        Morning Jog
      </div>
    </div>
    
    <div className="NextEvent_countdown">
      24 Minutes
    </div>
  </div>
)

export default NextEvent
