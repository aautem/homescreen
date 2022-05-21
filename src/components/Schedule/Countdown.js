import { BiTimer } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

dayjs.extend(require('dayjs/plugin/relativeTime'))

const countdown = {
  date: dayjs('2022-05-21T02:30:00.000Z'),
  name: 'Leaving for Ireland',
}

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState('')
  const hasCountdown = countdown && dayjs().isBefore(countdown.date)

  useEffect(() => {
    if (!hasCountdown) return setTimeRemaining('')

    setTimeRemaining(dayjs().to(countdown.date))

    const interval = setInterval(() => {
      setTimeRemaining(dayjs().to(countdown.date))
    }, 60 * 1000)

    return () => {
      clearInterval(interval)
    }
  }, [hasCountdown])

  if (!hasCountdown) return null

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), #fff)`,
        bottom: 0,
        display: 'flex',
        fontWeight: 'bold',
        fontSize: '1.3rem',
        justifyContent: 'center',
        padding: '3.2rem 0 0.8rem',
        position: 'absolute',
        width: '100%',
      }}
    >
      <BiTimer size="24" />
      <span style={{ marginLeft: '0.25rem' }}>
        {countdown.name} {timeRemaining}
      </span>
    </div>
  )
}

export default Countdown
