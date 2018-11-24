import format from 'date-fns/format'
import React, { Fragment } from 'react'
import { militaryTime } from '../../config'
import './Clock.css'

import SecondIndicators from './SecondIndicators'

import { DateTimeInjector } from '../../contexts/DateTime'

const formatDateTime = (
  dateTime => (
    militaryTime
    ? format(dateTime, 'HH:mm')
    : format(dateTime, 'hh:mm')
  )
)

const Clock = () => (
  <Fragment>
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
  </Fragment>
)

export default Clock
