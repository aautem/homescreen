import format from 'date-fns/format'
// import PropTypes from 'prop-types'
import React from 'react'
import './Date.css'

import {
  DateTimeInjector,
  DateTimeProvider,
} from '../../contexts/DateTime'

// TODO: Pull from custom config
const dateFormat = 'ddd, MMM DD'

const Date = () => (
  <DateTimeProvider>
    <DateTimeInjector>
      {({ dateTime }) => (
        <div className="Date">
            {
              format(
                dateTime,
                dateFormat,
              )
            }
        </div>
      )}
    </DateTimeInjector>
  </DateTimeProvider>
)

export default Date
