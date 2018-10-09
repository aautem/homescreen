import getSeconds from 'date-fns/get_seconds'
import React from 'react'

import Second from './Second'
import { DateTimeConsumer } from '../../contexts/DateTimeContext'
import './SecondsColumn.css'

const hasSecondElapsed = ({
  dateTime,
  second,
}) => (
  getSeconds(dateTime)
  >= second
)

const SecondsColumn = ({
  secondsRow,
}) => (
  <DateTimeConsumer>
    {({ dateTime }) => (
      <div className="SecondsColumn">
        {
          secondsRow
          .map(second => (
            <Second
              hasElapsed={
                hasSecondElapsed({
                  dateTime,
                  second,
                })
              }
              key={second}
            />
          ))
        }
      </div>
    )}
  </DateTimeConsumer>
)

export default SecondsColumn
