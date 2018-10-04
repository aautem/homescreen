import getSeconds from 'date-fns/get_seconds'
import React from 'react'

import { CurrentDateConsumer } from '../../contexts/CurrentDateContext'
import './SecondsGrid.css'

const SecondsGrid = () => (
  <CurrentDateConsumer>
    {({ currentDate }) => (
      <div className="SecondsGrid">
        {getSeconds(currentDate)}
      </div>
    )}
  </CurrentDateConsumer>
)

export default SecondsGrid
