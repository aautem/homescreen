import React from 'react'

import returnTwoDigitArray from '../../utils/returnTwoDigitArray'

const Time = ({ time }) => (
  returnTwoDigitArray(
    String(time)
  )
  .map((digit, index) => (
    <div key={index}>
      {digit}
    </div>
  ))
)

export default Time
