import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const timeFormat = 'h:mm a'

const Time = () => {
  const [time, setTime] = useState(dayjs().format(timeFormat))

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
      <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>{time}</div>
    </div>
  )
}

export default Time
