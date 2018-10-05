import React from 'react'

import SecondsColumn from './SecondsColumn'
import { secondValues } from '../../../utils/constants'
import './SecondsGrid.css'

const SecondsGrid = () => (
  <div className="SecondsGrid">
    {
      secondValues
      .map(secondsRow => (
        <SecondsColumn
          key={secondsRow.join('')}
          seconds={secondsRow}
        />
      ))
    }
  </div>
)

export default SecondsGrid
