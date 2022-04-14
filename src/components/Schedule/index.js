import dayjs from 'dayjs'

import { useCalendar } from '../../hooks/useCalendar'
import { useGoogleAuth } from '../../hooks/useGoogleAuth'
import EmptyState from './EmptyState'
import Event from './Event'
import FadeOut from '../FadeOut'
import Header from './Header'

dayjs.extend(require('dayjs/plugin/isBetween'))
dayjs.extend(require('dayjs/plugin/isSameOrBefore'))

const background = 'rgb(127, 177, 179)'
const dateFormat = 'ddd, MMM D'
const timeFormat = 'h:mma'

const formatEvent = (e, displayTime, isInProgress = false) => ({
  colorId: e.colorId,
  displayTime,
  id: e.id,
  isInProgress,
  location: e.location,
  name: e.summary,
})

const Schedule = () => {
  const { isAuthenticated } = useGoogleAuth()
  const calendarQuery = useCalendar(isAuthenticated)

  if (calendarQuery.isError) {
    return <div>Calendar error: {calendarQuery.error.message}</div>
  }

  const schedule = (calendarQuery.data ?? []).slice(0, 5).reduce(
    (s, e) => {
      const today = dayjs()
      const tomorrow = dayjs().add(1, 'day')
      const future = dayjs().add(2, 'days')

      const startDate = e.start.date
      const startTime = e.start.dateTime ?? e.start.datetime
      const start = startDate
        ? dayjs(startDate).startOf('day')
        : dayjs(startTime)

      const endDate = e.end.date
      const endTime = e.end.dateTime ?? e.end.datetime
      const end = endDate
        ? dayjs(endDate).subtract(1, 'day').endOf('day')
        : dayjs(endTime)

      // Multi day events
      if (!start.isSame(end, 'day')) {
        if (start.isSameOrBefore(today, 'day')) {
          let displayTime = 'All Day'
          let startsAt = null
          let endsAt = null

          if (start.isAfter(today.startOf('day'))) {
            startsAt = start.format(timeFormat)
          }

          if (end.isBefore(today.endOf('day'))) {
            endsAt = end.format(timeFormat)
          }

          if (startsAt) {
            displayTime = startsAt
          } else if (endsAt) {
            displayTime = `Until ${endsAt}`
          }

          const isInProgress =
            Boolean(startsAt || endsAt) && dayjs().isBetween(start, end)

          s.today.push(formatEvent(e, displayTime, isInProgress))
        }

        if (tomorrow.isSameOrBefore(end, 'day')) {
          let displayTime = 'All Day'
          let startsAt = null
          let endsAt = null

          if (start.isAfter(tomorrow.startOf('day'))) {
            startsAt = start.format(timeFormat)
          }

          if (end.isBefore(tomorrow.endOf('day'))) {
            endsAt = end.format(timeFormat)
          }

          if (startsAt) {
            displayTime = startsAt
          } else if (endsAt) {
            displayTime = `Until ${endsAt}`
          }

          s.tomorrow.push(formatEvent(e, displayTime))
        }

        if (future.isSameOrBefore(end, 'day')) {
          let startsAt = start.format(dateFormat)
          let endsAt = end.format(dateFormat)
          let displayTime = `${startsAt} - ${endsAt}`

          s.future.push(formatEvent(e, displayTime))
        }

        return s
      }

      const isAllDay = !startTime
      const displayTime = isAllDay ? 'All Day' : start.format(timeFormat)

      if (today.isSame(start, 'day')) {
        const isInProgress = !isAllDay && dayjs().isBetween(start, end)

        s.today.push(formatEvent(e, displayTime, isInProgress))
      } else if (tomorrow.isSame(start, 'day')) {
        s.tomorrow.push(formatEvent(e, displayTime))
      } else {
        s.future.push(formatEvent(e, start.format(dateFormat)))
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
          <Event {...e} key={e.id} />
        ))}
      </div>

      <FadeOut color={background} />
    </div>
  )
}

export default Schedule
