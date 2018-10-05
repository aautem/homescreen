import React from 'react'

import SecondsColumn from './SecondsColumn'
import { CurrentDateConsumer } from '../../../contexts/CurrentDateContext'
import { secondValues } from '../../../utils/constants'
import './SecondsGrid.css'

const SecondsGrid = () => (
  <CurrentDateConsumer>
    {({ currentDate }) => (
      <div className="SecondsGrid">
        {
          secondValues
          .map(secondsRow => (
            <SecondsColumn
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
