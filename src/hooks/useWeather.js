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
    alerts: response.data.alerts ?? [],
    now: response.data.current,
    daily: response.data.daily.slice(0, 4).map(w => ({
      ...w,
      day: dayjs.unix(w.dt).format('ddd'),
    })),
    later: [
      {
        ...response.data.hourly[6],
        time: dayjs.unix(response.data.hourly[6].dt).format('ha'),
      },
      {
        ...response.data.hourly[12],
        time: dayjs.unix(response.data.hourly[12].dt).format('ha'),
      },
    ],
  }

  return weather
}

// Limited to 60 API calls per minute
export function useWeather() {
  return useQuery(['weather'], fetchWeather, { staleTime: 60 * 1000 * 60 })
}
