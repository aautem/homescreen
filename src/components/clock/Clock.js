import React from 'react'

import Display from './Display'
import SecondLabel from './SecondLabel'
import SecondsGrid from './SecondsGrid'
import './Clock.css'

const bottomRowSeconds = [8, 16, 24, 32, 40, 48, 56]
const topRowSeconds = [4, 12, 20, 28, 36, 44, 52, 60]

const Clock = () => (
  <div className="Clock">
    <div className="Clock_gutterTop">
      {
        topRowSeconds
        .map(second => (
          <SecondLabel
            key={second}
            second={second}
          />
        ))
      }
    </div>

    <div className="Clock_display">
      <Display />
      <SecondsGrid />
    </div>

    <div className="Clock_gutterBottom">
    {
        bottomRowSeconds
        .map(second => (
          <SecondLabel
            key={second}
            second={second}
          />
        ))
      }
    </div>
  </div>
)

export default Clock
