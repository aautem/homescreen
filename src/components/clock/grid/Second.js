import classNames from 'classnames'
import React from 'react'

import './Second.css'

const Second = ({
  colors,
  hasElapsed,
}) => (
  <div
    className={
      classNames(
        'Second',
        { hasElapsed },
      )
    }
  />
)

export default Second
