const zeroArray = ['0']

const returnTwoDigitArray = (
  digitString => (
    digitString.length > 1
    ? digitString.split('')
    : (
      zeroArray.concat(
        digitString
      )
    )
  )
)

export default returnTwoDigitArray
