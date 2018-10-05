import getSeconds from 'date-fns/get_seconds'
import React from 'react'

import Second from './Second'
import './SecondsColumn.css'

const hasSecondElapsed = ({
  currentDate,
  second,
}) => (
  getSeconds(currentDate)
  >= second
)

const SecondsColumn = ({
  currentDate,
  seconds,
}) => (  
  <div className="SecondsColumn">
    {
      seconds
      .map(second => (
        <Second
          hasElapsed={
            hasSecondElapsed({
              currentDate,
              second,
            })
          }
          key={second}
        />
      ))
    }
  </div>
)

export default SecondsColumn
