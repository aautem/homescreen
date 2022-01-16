import Box from '@material-ui/core/Box'
import dayjs from 'dayjs'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { useCalendar } from '../hooks/useCalendar'
import { useGoogleAuth } from '../hooks/useGoogleAuth'
import DayMarker from './DayMarker'
import Event from './Event'

// Set event `opacity` closer to 0 as we get to bottom of page
const Calendar = () => {
  const { isAuthenticated } = useGoogleAuth()
  const calendarQuery = useCalendar(isAuthenticated)

  console.log({ calendarQuery })

  if (calendarQuery.isError) {
    return <div>Calendar error: {calendarQuery.error.message}</div>
  }

  // TODO: Handle multi-day events
  const schedule = (calendarQuery.data ?? []).reduce(
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

  return (
    <Box color="#fff" pt="1em">
      <Typography align="center" color="inherit" variant="h1">
        {dayjs().format('MMMM YYYY')}
      </Typography>

      <Box alignItems="center" display="flex" justifyContent="space-between">
        <DayMarker name="Sunday" />
        <DayMarker name="Monday" />
        <DayMarker name="Tuesday" />
        <DayMarker name="Wednesday" />
        <DayMarker name="Thursday" />
        <DayMarker name="Friday" />
        <DayMarker name="Saturday" />
      </Box>

      <Box color="#fff" mb="1em">
        <Typography color="inherit" gutterBottom variant="h5">
          Today
        </Typography>
        <Paper style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
          {schedule.today.map(e => {
            return <Event {...e} key={e.id} />
          })}

          {!schedule.today.length && (
            <Box p="0.5em">
              <Typography variant="h5">
                Nothing scheduled for {dayjs().format('dddd, MMMM D')}
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>

      <Box color="#fff" mb="1em">
        <Typography color="inherit" gutterBottom variant="h5">
          Tomorrow
        </Typography>
        <Paper style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
          {schedule.tomorrow.map(e => {
            return <Event {...e} key={e.id} />
          })}

          {!schedule.tomorrow.length && (
            <Box p="0.5em">
              <Typography variant="h5">
                Nothing scheduled for{' '}
                {dayjs().add(1, 'day').format('dddd, MMMM D')}
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>

      <Box color="#fff">
        <Typography color="inherit" gutterBottom variant="h5">
          Upcoming
        </Typography>
        <Paper style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
          {schedule.future.map(e => {
            return <Event {...e} isFutureEvent key={e.id} />
          })}

          {!schedule.future.length && (
            <Box p="0.5em">
              <Typography variant="h5">Loading...</Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  )
}

export default Calendar