const temperatureUnit = '°F'

const getTemperature = (
  ({ temperature }) => (
    String(
      Math.round(temperature)
    )
    .concat(temperatureUnit)
  )
)

export default getTemperature
