import { BiTimer } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { useCountdown } from '../../hooks/useCountdown'

dayjs.extend(require('dayjs/plugin/relativeTime'))

const Countdown = () => {
  const countdownQuery = useCountdown()
  const { name = '', date = '', time = '' } = countdownQuery.data ?? {}
  const [hours, minutes] = time.split(':')

  const countdownDateTime =
    date &&
    time &&
    dayjs(date)
      .startOf('day')
      .add(Number(hours), 'hours')
      .add(Number(minutes), 'minutes')

  const hasCountdown =
    !!countdownDateTime && dayjs().isBefore(countdownDateTime)

  const [timeRemaining, setTimeRemaining] = useState(
    () => hasCountdown && dayjs().to(countdownDateTime),
  )

  useEffect(() => {
    if (!hasCountdown) return setTimeRemaining('')

    const interval = setInterval(() => {
      setTimeRemaining(dayjs().to(countdownDateTime))
    }, 60 * 1000)

    return () => {
      clearInterval(interval)
    }
  }, [countdownDateTime, hasCountdown])

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
        {name} {timeRemaining}
      </span>
    </div>
  )
}

export default Countdown
