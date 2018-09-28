import getSeconds from 'date-fns/get_seconds'
import React from 'react'

import Second from './Second'

import {
  arrayOf,
  instanceOf,
  number,
  object,
} from 'prop-types'

const propTypes = {
  colors: object.isRequired,
  seconds: arrayOf(number).isRequired,
  time: instanceOf(Date).isRequired,
}

const hasSecondElapsed = ({
  second,
  time,
}) => (
  getSeconds(time)
  >= second
)

const TickRow = ({
  colors,
  seconds,
  time,
}) => (
  <section className="Tick">
    {
      seconds
      .map(second => (
        <Second
          colors={colors}
          hasElapsed={
            hasSecondElapsed({
              second,
              time,
            })
          }
          key={second}
        />
      ))
    }
  </section>
)

TickRow
.propTypes = propTypes

export default TickRow
