import getHours from 'date-fns/get_hours'
import getMinutes from 'date-fns/get_minutes'
import React from 'react'

import Time from './Time'
import { CurrentDateConsumer } from '../../contexts/CurrentDateContext'
import './Display.css'

const Display = () => (
  <CurrentDateConsumer>
    {({ currentDate }) => (
      <div className="Display">
        <Time
          time={
            getHours(
              currentDate
            )
          }
        />

        <Time
          time={
            getMinutes(
              currentDate
            )
          }
        />
      </div>
    )}
  </CurrentDateConsumer>
)

export default Display
