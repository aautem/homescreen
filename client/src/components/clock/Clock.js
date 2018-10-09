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
        .map(label => (
          <SecondLabel
            key={label}
            label={label}
          />
        ))
      }
    </div>

    <div className="Clock_display">
      <SecondsGrid />
      <Time />
    </div>

    <div className="Clock_bottomGutter">
    {
        bottomGutterSeconds
        .map(label => (
          <SecondLabel
            key={label}
            label={label}
          />
        ))
      }
    </div>
  </div>
)

export default Clock
