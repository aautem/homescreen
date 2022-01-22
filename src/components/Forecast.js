import { Fragment } from 'react'
import { WiFahrenheit } from 'react-icons/wi'

import { useWeather } from '../hooks/useWeather'
import weatherIcons from '../utils/weatherIcons'

const Forecast = () => {
  const query = useWeather()
  const now = query.data?.now
  const today = query.data?.daily[0]
  const Icon = weatherIcons[now?.weather[0].icon]

  return (
    <div
      style={{
        background: query.isError ? 'pink' : 'rgb(127, 177, 179)',
        bottom: 0,
        color: 'white',
        left: '75%',
        padding: '1rem 1.5rem',
        position: 'absolute',
        right: 0,
        top: '50%',
      }}
    >
      <div style={{ fontSize: '1.75rem' }}>Liberty, MO</div>

      {query.isSuccess && query.data?.alerts.length > 0 && (
        <div
          style={{
            background: 'pink',
            color: 'black',
            fontSize: '0.8rem',
            marginBottom: '-2rem',
            padding: '0 0.25rem',
          }}
        >
          {JSON.stringify(query.data.alerts[0])}
        </div>
      )}

      {query.isError && (
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

      {query.isSuccess && (
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: '5rem',
            fontWeight: 'bold',
            justifyContent: 'center',
            marginTop: '-1.25rem',
          }}
        >
          {Icon && <Icon size="10rem" />}
          {Math.round(now?.temp)}
          <WiFahrenheit size="10rem" style={{ margin: '-1rem 0 0 -2rem' }} />
        </div>
      )}

      {query.isSuccess && (
        <div
          style={{
            display: 'flex',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '-2.5rem',
          }}
        >
          <div>H {Math.round(today?.temp.max)}&deg;</div>
          <div>L {Math.round(today?.temp.min)}&deg;</div>
        </div>
      )}

      {query.isSuccess && (
        <div
          style={{
            display: 'grid',
            fontSize: '1.5rem',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
            marginTop: '1rem',
            placeItems: 'center',
          }}
        >
          {query.data?.later.map((w, i) => {
            const Icon = weatherIcons[w.weather[0].icon]

            return (
              <Fragment key={i}>
                <div>{w.time}</div>
                {Icon ? <Icon size="2.25rem" /> : <div>?</div>}
                <div>{Math.round(w.temp)}&deg;</div>
                <div>{w.pop}%</div>
              </Fragment>
            )
          })}

          {query.data?.daily.slice(1).map((w, i) => {
            const Icon = weatherIcons[w.weather[0].icon]

            return (
              <Fragment key={i}>
                <div>{w.day}</div>
                {Icon ? <Icon size="2.25rem" /> : <div>?</div>}
                <div>{Math.round(w.temp.day)}&deg;</div>
                <div>{w.pop}%</div>
              </Fragment>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Forecast
