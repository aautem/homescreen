const fetchWeather = require('./fetchWeather')

const router = app => {
  app.get(
    '/api/weather',
    fetchWeather
  )
}

module
.exports = router
