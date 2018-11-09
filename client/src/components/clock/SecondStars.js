import getSeconds from 'date-fns/get_seconds'
import React from 'react'

import Star from './Star'
import { DateTimeProvider, DateTimeConsumer } from '../deprecated/contexts/DateTimeContext'
import { secondValues } from '../../utils/constants'
import './SecondStars.css'

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
    <DateTimeProvider>
        <DateTimeConsumer>
            {({ dateTime }) => (
                <div className="SecondsColumn">
                    {
                        secondsRow
                        .map(second => (
                            <Star
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
    </DateTimeProvider>
)

const SecondStars = () => (
    <div className="SecondStars">
        {
            secondValues
            .map(secondsRow => (
                <SecondsColumn
                    key={secondsRow.join('')}
                    secondsRow={secondsRow}
                />
            ))
        }
    </div>
)

export default SecondStars
