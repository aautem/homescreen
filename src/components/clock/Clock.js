import React from 'react'

import Time from './display/Time'
import SecondLabel from './display/SecondLabel'
import SecondsGrid from './grid/SecondsGrid'
import { bottomGutterSeconds, topGutterSeconds } from '../../utils/constants'
import './Clock.css'

const Clock = () => (
  <div className="Clock">
    <div className="Clock_topGutter">
      {
        topGutterSeconds
        .map(second => (
          <SecondLabel
            key={second}
            second={second}
          />
        ))
      }
    </div>

    <div className="Clock_display">
      <Time />
      <SecondsGrid />
    </div>

    <div className="Clock_bottomGutter">
    {
        bottomGutterSeconds
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
