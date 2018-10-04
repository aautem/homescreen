import getMinutes from 'date-fns/get_minutes'
import getHours from 'date-fns/get_hours'
import React from 'react'

import DigitDuo from './DigitDuo'

import {
  instanceOf,
} from 'prop-types'

const propTypes = {
  time: instanceOf(Date).isRequired,
}

const ClockDisplay = ({
  time,
}) => (
  <div className="Time">
    <DigitDuo
      digits={
        getHours(time) > 12
        ? getHours(time) - 12
        : (
          getHours(time) === 0
          ? 12
          : getHours(time)
        )
      }
    />

    <DigitDuo
      digits={
        getMinutes(time)
      }
    />
  </div>
)

ClockDisplay
.propTypes = propTypes

export default ClockDisplay
