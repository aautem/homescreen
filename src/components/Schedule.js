import dayjs from 'dayjs'

import { useCalendar } from '../hooks/useCalendar'
import { useGoogleAuth } from '../hooks/useGoogleAuth'
import Event from './Event'

dayjs.extend(require('dayjs/plugin/isBetween'))

const Schedule = () => {
  const { isAuthenticated } = useGoogleAuth()
  const calendarQuery = useCalendar(isAuthenticated)

  if (calendarQuery.isError) {
    return <div>Calendar error: {calendarQuery.error.message}</div>
  }

  // TODO: Handle multi-day events
  const schedule = (calendarQuery.data ?? []).reduce(
    (s, e) => {
      const { date, datetime, dateTime } = e.start
      const startDate = dayjs(date ?? datetime ?? dateTime)

      if (dayjs().isSame(startDate, 'day')) {
        s.today.push(e)
      } else if (dayjs().add(1, 'day').isSame(startDate, 'day')) {
        s.tomorrow.push(e)
      } else {
        s.future.push(e)
      }

      return s
    },
    {
      future: [],
      today: [],
      tomorrow: [],
    },
  )

  return (
    <div
      style={{
        background: 'rgb(127, 177, 179)',
        bottom: '50%',
        left: '29%',
        position: 'absolute',
        right: '25%',
        top: 0,
      }}
    >
      <div
        style={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: '2rem', margin: '2rem 0 1rem 2rem' }}>
          Today
        </div>

        {!schedule.today.length && (
          <>
            <div style={{ fontSize: '1.5rem', margin: '0 0 1rem 2rem' }}>
              Nothing scheduled for {dayjs().format('dddd, MMMM D')}
            </div>
            <div style={{ height: '1px', background: 'white' }} />
          </>
        )}

        {schedule.today.map((e, i) => (
          <Event {...e} key={e.id} />
        ))}

        <div style={{ fontSize: '2rem', margin: '1rem 0 0.5rem 2rem' }}>
          Tomorrow
        </div>

        {!schedule.tomorrow.length && (
          <>
            <div style={{ fontSize: '1.5rem', margin: '0 0 1rem 2rem' }}>
              Nothing scheduled for{' '}
              {dayjs().add(1, 'day').format('dddd, MMMM D')}
            </div>
            <div style={{ height: '1px', background: 'white' }} />
          </>
        )}

        {schedule.tomorrow.map(e => (
          <Event {...e} key={e.id} />
        ))}

        <div style={{ fontSize: '2rem', margin: '1rem 0 0.5rem 2rem' }}>
          Upcoming
        </div>

        {!schedule.future.length && (
          <>
            <div style={{ fontSize: '1.5rem', margin: '0 0 1rem 2rem' }}>
              Loading...
            </div>
            <div style={{ height: '1px', background: 'white' }} />
          </>
        )}

        {schedule.future.map(e => (
          <Event {...e} isFutureEvent key={e.id} />
        ))}
      </div>

      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0), rgb(127, 177, 179))',
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: 0,
          top: '60%',
        }}
      />
    </div>
  )
}

export default Schedule
