import classNames from 'classnames'
import React from 'react'

import {
  bool,
  shape,
  string,
} from 'prop-types'

const propTypes = {
  colors: (
    shape({
      primary: string.isRequired,
      secondary: string.isRequired,
    })
    .isRequired
  ),
  hasElapsed: bool.isRequired,
}

const Second = ({
  colors: {
    primary,
    secondary,
  },
  hasElapsed
}) => (  
  <div
    className={
      classNames(
        'Second',
        { hasElapsed },
      )      
    }
    style={{
      background: (
        hasElapsed
        ? primary
        : secondary
      ),
    }}
  />
)

Second
.propTypes = propTypes

export default Second
