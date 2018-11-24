import classNames from 'classnames'
import React from 'react'

import './Second.sass'

const Second = ({
  hasElapsed,
  position,
}) => (
  <div
    className={
      classNames(
        'Second',
        { hasElapsed },
      )
    }
    style={position}
  />
)

export default Second
