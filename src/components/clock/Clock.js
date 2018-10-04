import React from 'react'

import Display from './Display'
import './Clock.css'

const Clock = () => (
  <div className="Clock">
    <div className="Clock_gutter">
      4 12 20 28 36 44 52 60
    </div>

    <div className="Clock_display">
      <Display />
    </div>

    <div className="Clock_gutter">
      8 16 24 32 40 48 56
    </div>
  </div>
)

export default Clock
