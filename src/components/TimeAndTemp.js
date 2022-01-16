import dayjs from 'dayjs'

import { useWeather } from '../hooks/useWeather'
import weatherIcons from '../utils/weatherIcons'

// TODO: Update time every minute
// TODO: Update weather every hour
const TimeAndTemp = () => {
  const now = dayjs()
  const weatherQuery = useWeather()
  const currentWeather = weatherQuery.data?.now
  const WeatherIcon = weatherIcons[currentWeather?.weather[0].icon]

  return (
    <div
      style={{
        color: 'white',
        left: '1rem',
        position: 'absolute',
        top: '1rem',
        zIndex: 100,
      }}
    >
      <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        {now.format('h:mm a')}
      </span>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '2rem',
          justifyContent: 'center',
        }}
      >
        {weatherQuery.isError && <span>Error loading weather</span>}

        {WeatherIcon && <WeatherIcon />}
        {weatherQuery.isSuccess && (
          <span style={{ marginLeft: '1rem' }}>
            {Math.round(currentWeather?.temp)}&deg;F
          </span>
        )}
      </div>
    </div>
  )
}

export default TimeAndTemp
