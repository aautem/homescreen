import getSeconds from 'date-fns/get_seconds'
import React from 'react'

import Star from './Star'
import { DateTimeConsumer } from '../deprecated/contexts/DateTimeContext'
import { seconds } from '../../utils/constants'
import './SecondStars.css'

const hasSecondElapsed = ({
    dateTime,
    second,
}) => (
    getSeconds(dateTime)
    >= second
)

const SecondStars = () => (
    <DateTimeConsumer>
        {({ dateTime }) => (
            <div className="SecondStars">
                {
                    seconds
                    .map(({ second, top, left }) => (
                        <Star
                            hasElapsed={
                                hasSecondElapsed({
                                    dateTime,
                                    second,
                                })
                            }
                            key={second}
                            position={{
                                top,
                                left,
                            }}
                        />
                    ))
                }
            </div>
        )}
    </DateTimeConsumer>
)

export default SecondStars
