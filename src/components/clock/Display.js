import getHours from 'date-fns/get_hours'
import getMinutes from 'date-fns/get_minutes'
import React from 'react'

import DoubleDigits from './DoubleDigits'
import { CurrentDateConsumer } from '../../contexts/CurrentDateContext'
import './Display.css'

const Display = () => (
  <CurrentDateConsumer>
    {({ currentDate }) => (
      <div className="Display">
        <DoubleDigits
          digits={
            getHours(currentDate) > 12
            ? getHours(currentDate) - 12
            : (
              getHours(currentDate) === 0
              ? 12
              : getHours(currentDate)
            )
          }
        />
    
        <DoubleDigits
          digits={
            getMinutes(currentDate)
          }
        />
      </div>
    )}
  </CurrentDateConsumer>
)

export default Display
