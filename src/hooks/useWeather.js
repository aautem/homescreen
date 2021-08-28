import { useQuery } from 'react-query'
import axios from 'axios'
import dayjs from 'dayjs'

const {
  REACT_APP_OPEN_WEATHER_MAP_API_KEY,
  REACT_APP_OPEN_WEATHER_MAP_LAT_LON,
} = process.env

const [lat, lon] = REACT_APP_OPEN_WEATHER_MAP_LAT_LON.split('_')
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'

async function fetchWeather() {
  const response = await axios.get(
    `${baseUrl}?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${REACT_APP_OPEN_WEATHER_MAP_API_KEY}`,
  )

  const weather = {
    now: {
      ...response.data.current,
      sunriseTime: dayjs.unix(response.data.current.sunrise).format('h:mma'),
      sunsetTime: dayjs.unix(response.data.current.sunset).format('h:mma'),
    },
    daily: response.data.daily.slice(1, 4).map(w => ({
      ...w,
      dateTime: dayjs.unix(w.dt).format('ddd D, h:mma'),
    })),
    later: {
      ...response.data.hourly[6],
      dateTime: dayjs.unix(response.data.hourly[6].dt).format('ddd D, h:mma'),
    },
  }

  return weather
}

// Limited to 60 API calls per minute
export function useWeather() {
  return useQuery(['weather'], fetchWeather)
}
