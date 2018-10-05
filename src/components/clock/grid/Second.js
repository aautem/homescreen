import classNames from 'classnames'
import React from 'react'

import './Second.css'

const Second = ({
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
