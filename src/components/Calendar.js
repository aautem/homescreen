import { useCalendar } from '../hooks/useCalendar'
import { useGoogleAuth } from '../hooks/useGoogleAuth'
import dayjs from 'dayjs'

const Calendar = () => {
  const { isAuthenticated } = useGoogleAuth()
  const calendarQuery = useCalendar(isAuthenticated)

  console.log({ calendarQuery })

  if (calendarQuery.isError) {
    return <div>Calendar error: {calendarQuery.error.message}</div>
  }

  const events = calendarQuery.data ?? []
  const schedule = events.reduce(
    (s, e) => {
      const { date, datetime, dateTime } = e.start
      const startDate = dayjs(date || datetime || dateTime)

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

  console.log({ schedule })

  return (
    <div>
      <h2>Calendar status: {calendarQuery.status}</h2>

      <h5>Today</h5>
      {schedule.today.map(e => {
        return <div key={e.id}>{e.summary}</div>
      })}

      <h5>Tomorrow</h5>
      {schedule.tomorrow.map(e => {
        return <div key={e.id}>{e.summary}</div>
      })}

      <h5>Upcoming</h5>
      {schedule.future.map(e => {
        return <div key={e.id}>{e.summary}</div>
      })}
    </div>
  )
}

export default Calendar
