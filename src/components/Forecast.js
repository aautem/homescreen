import { WiFahrenheit } from 'react-icons/wi'

import { useWeather } from '../hooks/useWeather'
import weatherIcons from '../utils/weatherIcons'

const Forecast = () => {
  const weatherQuery = useWeather()
  console.log({ weatherQuery })

  return (
    <div
      style={{
        background: weatherQuery.isError ? 'pink' : 'rgba(95, 158, 160, 0.8)',
        bottom: 0,
        color: 'white',
        left: '75%',
        padding: '2rem',
        position: 'absolute',
        right: 0,
        top: '50%',
      }}
    >
      <div style={{ fontSize: '2rem' }}>Liberty, MO</div>

      {weatherQuery.isError && (
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: '1.5rem',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          Error loading weather
        </div>
      )}

      {/* <div
        style={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '2rem',
        }}
      >
        {weatherQuery.isError && <div>Error loading weather</div>}

        {weatherQuery.isSuccess && (
          <div style={{ marginRight: '0.5rem' }}>
            {Math.round(currentWeather?.temp)}&deg;F
          </div>
        )}

        {WeatherIcon && <WeatherIcon fontSize="inherit" />}
      </div> */}
    </div>
  )
}

export default Forecast
