import React from 'react'

import './DoubleDigits.css'

const digitZero = '0'

const twoItemArray = (
  digits
) => (
  digits
  .length
  === 2
  ? digits
  : (
    [digitZero]
    .concat(
      digits
    )
  )
)

const DoubleDigits = ({
  digits,
}) => (
  twoItemArray(
    digits
    .toString()
    .split('')
  )
  .map((digit, index) => (
    <div
      className="DoubleDigits"
      key={index}
    >
      {digit}
    </div>
  ))
)

export default DoubleDigits
