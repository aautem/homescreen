import dayjs from 'dayjs'

import { useCalendar } from '../hooks/useCalendar'
import { useGoogleAuth } from '../hooks/useGoogleAuth'

dayjs.extend(require('dayjs/plugin/isBetween'))

const colors = {
  1: '#a4bdfc',
  2: '#7ae7bf',
  3: '#dbadff',
  4: '#ff887c',
  5: '#fbd75b',
  6: '#dc143c	',
  7: '#46d6db', // Default
  8: '#e1e1e1',
  9: '#5484ed',
  10: '#51b749',
  11: '#dc2127',
}

const currentFormat = 'h:mm A'
const upcomingFormat = 'ddd, MMM D'

const Event = ({ colorId, end, isFutureEvent, location, start, summary }) => {
  const dateFormat = isFutureEvent ? upcomingFormat : currentFormat
  const isAllDay = !isFutureEvent && Boolean(start.date)

  const startDate = dayjs(start.date ?? start.datetime ?? start.dateTime)
  const endDate = dayjs(end.date ?? end.datetime ?? end.dateTime)

  const isCurrentEvent =
    !isAllDay && Boolean(end) && dayjs().isBetween(startDate, endDate)

  return (
    <>
      <div
        style={{
          alignItems: 'center',
          backgroundImage: isCurrentEvent
            ? 'linear-gradient(to right, rgba(95, 158, 160, 0.8), rgba(95, 158, 160, 0.2))'
            : undefined,
          display: 'flex',
        }}
      >
        <div
          style={{
            background: colors[colorId] ?? colors[7],
            borderRadius: '50%',
            height: '1rem',
            margin: '0 0.5rem 0 2rem',
            width: '1rem',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            paddingBottom: 0,
          }}
        >
          <div style={{ fontSize: '1.5rem' }}>
            {isAllDay
              ? 'All Day'
              : `${startDate.format(dateFormat)}${
                  end ? ` - ${endDate.format(dateFormat)}` : ''
                }`}
            {location && ` (${location})`}
          </div>
          <div style={{ fontSize: '2rem', margin: '0.5rem 0 1rem' }}>
            {summary}
          </div>
        </div>
      </div>

      <div style={{ height: '1px', background: 'white' }} />
    </>
  )
}

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
        background: 'rgba(95, 158, 160, 0.8)',
        bottom: '50%',
        left: '35%',
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
            'linear-gradient(rgba(0, 0, 0, 0), rgb(95, 158, 160))',
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
