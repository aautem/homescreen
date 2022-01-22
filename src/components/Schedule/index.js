import dayjs from 'dayjs'

import { useCalendar } from '../../hooks/useCalendar'
import { useGoogleAuth } from '../../hooks/useGoogleAuth'
import EmptyState from './EmptyState'
import Event from './Event'
import FadeOut from '../FadeOut'
import Header from './Header'

dayjs.extend(require('dayjs/plugin/isBetween'))

const background = 'rgb(127, 177, 179)'

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
        background,
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
        <Header>Today</Header>

        {!schedule.today.length && (
          <EmptyState>
            Nothing scheduled for {dayjs().format('dddd, MMMM D')}
          </EmptyState>
        )}

        {schedule.today.map((e, i) => (
          <Event {...e} key={e.id} />
        ))}

        <Header>Tomorrow</Header>

        {!schedule.tomorrow.length && (
          <EmptyState>
            Nothing scheduled for {dayjs().add(1, 'day').format('dddd, MMMM D')}
          </EmptyState>
        )}

        {schedule.tomorrow.map(e => (
          <Event {...e} key={e.id} />
        ))}

        <Header>Upcoming</Header>

        {!schedule.future.length && <EmptyState>Loading...</EmptyState>}

        {schedule.future.map(e => (
          <Event {...e} isFutureEvent key={e.id} />
        ))}
      </div>

      <FadeOut color={background} />
    </div>
  )
}

export default Schedule
