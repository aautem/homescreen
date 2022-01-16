import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { useWeather } from '../hooks/useWeather'
import weatherIcons from '../utils/weatherIcons'

const timeFormat = 'h:mm a'

const TimeAndTemp = () => {
  const [time, setTime] = useState(dayjs().format(timeFormat))
  const weatherQuery = useWeather()
  const currentWeather = weatherQuery.data?.now
  const WeatherIcon = weatherIcons[currentWeather?.weather[0].icon]

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format(timeFormat))
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        color: 'white',
        left: '2rem',
        position: 'absolute',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        top: '2rem',
        zIndex: 100,
      }}
    >
      <dvi style={{ fontSize: '3rem', fontWeight: 'bold' }}>{time}</dvi>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '2rem',
        }}
      >
        {weatherQuery.isError && <dvi>Error loading weather</dvi>}

        {weatherQuery.isSuccess && (
          <dvi style={{ marginRight: '0.5rem' }}>
            {Math.round(currentWeather?.temp)}&deg;F
          </dvi>
        )}

        {WeatherIcon && <WeatherIcon fontSize="inherit" />}
      </div>
    </div>
  )
}

export default TimeAndTemp
