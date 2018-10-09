const axios = require('axios')
const latitude = 38.9333544
const longitude = -94.6452731
const { DARKSKY_API_KEY } = require('./apiKeys')

axios
.get(
  'https://api.darksky.net/forecast'
  .concat(`/${DARKSKY_API_KEY}`)
  .concat(`/${latitude},${longitude}`)
)
.then(({ data }) => {
  console.log({ currently: data.currently })
  console.log({ hourly: data.hourly.data })
  console.log({ daily: data.daily.data })
})
.catch(error => console.log(error))