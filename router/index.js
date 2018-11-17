const fetchCalendar = require('./fetchCalendar')
const fetchWeather = require('./fetchWeather')

const router = app => {
  app
  .get(
    '/api/calendar',
    fetchCalendar,
  )

  app
  .get(
    '/api/weather',
    fetchWeather,
  )
}

module.exports = router
