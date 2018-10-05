import getHours from 'date-fns/get_hours'
import getMinutes from 'date-fns/get_minutes'
import React from 'react'

import DigitDuo from './DigitDuo'
import { CurrentDateConsumer } from '../../../contexts/CurrentDateContext'
import './Time.css'

const Time = () => (
  <CurrentDateConsumer>
    {({ currentDate }) => (
      <div className="Time">
        <DigitDuo
          time={
            getHours(
              currentDate
            )
          }
        />

        <DigitDuo
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

export default Time
