import format from 'date-fns/format'
import PropTypes from 'prop-types'
import React from 'react'
import './Clock.css'

import SecondStars from './SecondStars'
import { DateTimeConsumer, DateTimeProvider } from '../deprecated/contexts/DateTimeContext'
import { militaryTime } from '../../config'

const formatDateTime = dateTime => (
    militaryTime
    ? (
      format(
        dateTime,
        'HHmm'
      )
    )
    : (
      format(
        dateTime,
        'hhmm'
      )
    )
)

const propTypes = {
    //
}

const Clock = () => (
    <DateTimeProvider>
        <SecondStars />
        <DateTimeConsumer>
            {({ dateTime }) => (
                <div className="Clock">
                    {
                        formatDateTime(
                            dateTime
                        )
                        .split('')
                        .map((digit, index) => (
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
        </DateTimeConsumer>
    </DateTimeProvider>
)

Clock
.propTypes = propTypes

export default Clock
