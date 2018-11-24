import format from 'date-fns/format'
// import PropTypes from 'prop-types'
import React from 'react'
import { militaryTime } from '../../config'
import './Clock.sass'

import SecondIndicators from './SecondIndicators'

import {
  DateTimeInjector,
  DateTimeProvider,
} from '../../contexts/DateTime'

const formatDateTime = (
  dateTime => (
    militaryTime
    ? format(dateTime, 'HH:mm')
    : format(dateTime, 'hh:mm')
  )
)

const Clock = () => (
  <DateTimeProvider>
    <SecondIndicators />
    <DateTimeInjector>
      {({ dateTime }) => (
        <div className="Clock">
          {
            formatDateTime(
              dateTime,
              'HH:mm',
            )
            .split('')
            .map((
              digit,
              index,
            ) => (
              <div
                className="Clock_text"
                key={index}
              >
                {digit}
              </div>
            ))
          }
        </div>
      )}
    </DateTimeInjector>
  </DateTimeProvider>
)

export default Clock
