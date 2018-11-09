import classNames from 'classnames'
import React from 'react'

import './Star.css'

const Star = ({
  hasElapsed,
  position,
}) => (
  <div
    className={
      classNames(
        'Star',
        { hasElapsed },
      )
    }
    style={position}
  />
)

export default Star
