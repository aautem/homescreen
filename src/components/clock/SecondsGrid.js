// import getSeconds from 'date-fns/get_seconds'
import React from 'react'

import SecondsColumn from './SecondsColumn'
import secondValues from '../../utils/secondValues'
import { CurrentDateConsumer } from '../../contexts/CurrentDateContext'
import './SecondsGrid.css'

const SecondsGrid = () => (
  <CurrentDateConsumer>
    {({ currentDate }) => (
      <div className="SecondsGrid">
        {
          secondValues
          .map(secondsRow => (
            <SecondsColumn
              // colors={colors}
              key={
                JSON
                .stringify(
                  secondsRow
                )
              }
              seconds={secondsRow}
              currentDate={currentDate}
            />
          ))
        }
      </div>
    )}
  </CurrentDateConsumer>
)

export default SecondsGrid
