import React from 'react'

import { TimeConsumer, TimeProvider } from '../../contexts/TimeContext'
import './Time.css'

const Time = () => (
  <TimeProvider>
    <TimeConsumer>
      {({ currentTimeString }) => (
        currentTimeString
        .split('')
        .map((digitString, index) => (
          <div key={index}>
            {digitString}
          </div>
        ))
      )}
    </TimeConsumer>
  </TimeProvider>
)

export default Time
