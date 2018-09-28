import React from 'react'
import { number } from 'prop-types'

const propTypes = {
  digits: number.isRequired,
}

const digitZero = '0'
const keyMaker = () => String(Math.random())

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

const DigitDuo = ({
  digits,
}) => (
  twoItemArray(
    digits
    .toString()
    .split('')
  )
  .map(digit => (
    <div
      className="Digit"
      key={keyMaker()}
    >
      {digit}
    </div>
  ))
)

DigitDuo
.propTypes = propTypes

export default DigitDuo
