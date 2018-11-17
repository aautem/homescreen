const axios = require('axios')
const lat = 38.9333544
const long = -94.6452731
const { DARKSKY_API_KEY } = require('./credentials/apiKeys')

const fetchWeather = (req, res) => {
  axios.get(
    'https://api.darksky.net/forecast'
    .concat(`/${DARKSKY_API_KEY}`)
    .concat(`/${lat},${long}`)
  )
  .then(({ data }) => {
    res.json(
      [{
        summary: data.currently.summary,
        icon: data.currently.icon,
        temperature: data.currently.temperature,
      }]
      .concat(
        data.daily.data
        .slice(1, 3)
        .map(({
          summary,
          icon,
          temperatureHigh,
          temperatureLow,
        }) => ({
          summary,
          icon,
          temperatureHigh,
          temperatureLow,
        }))
      )
    )
  })
  .catch(error => {
    res.json(error)
  })
}

module.exports = fetchWeather
