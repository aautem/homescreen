import getSeconds from 'date-fns/get_seconds'
import React from 'react'
import { seconds } from '../../utils/constants'
import './SecondIndicators.sass'

import Second from './Second'
import { DateTimeInjector } from '../../contexts/DateTime'

const SecondIndicators = () => (
  <DateTimeInjector>
    {({ dateTime }) => (
      <div className="SecondIndicators">
        {
          seconds
          .map(({
            second,
            top,
            left,
          }) => (
            <Second
              hasElapsed={
                getSeconds(dateTime) >= second
              }
              key={second}
              position={{
                top,
                left,
              }}
            />
          ))
        }
      </div>
    )}
  </DateTimeInjector>
)

export default SecondIndicators
