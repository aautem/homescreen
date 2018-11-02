import React from 'react'

import Time from './display/Time'
import SecondsGrid from './grid/SecondsGrid'
import './Clock.css'

const Clock = () => (
  <div className="Clock">
    <SecondsGrid />
    <Time />
  </div>
)

export default Clock
