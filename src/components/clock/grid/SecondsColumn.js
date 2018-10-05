import React from 'react'

import Second from './Second'
import { SecondConsumer, SecondProvider } from '../../contexts/SecondContext'
import './SecondsColumn.css'

const hasSecondElapsed = ({
  currentSecond,
  second,
}) => (
  Number(
    currentSecond
  ) >= second
)

const SecondsColumn = ({
  seconds,
}) => (
  <SecondProvider>
    <SecondConsumer>
      {({ currentSecond }) => (        
        seconds
        .map(second => (
          <Second
            hasElapsed={
              hasSecondElapsed({
                currentSecond,
                second,
              })
            }
            key={second}
          />
        ))
      )}
    </SecondConsumer>
  </SecondProvider>
)

export default SecondsColumn
