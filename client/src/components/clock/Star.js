import classNames from 'classnames'
import React from 'react'

import './Star.css'

const Star = ({
  hasElapsed,
}) => (
  <div
    className={
      classNames(
        'Star',
        { hasElapsed },
      )
    }
  />
)

export default Star
