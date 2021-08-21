import Box from '@material-ui/core/Box'
import dayjs from 'dayjs'
import Typography from '@material-ui/core/Typography'

const colors = {
  1: '#a4bdfc',
  2: '#7ae7bf',
  3: '#dbadff',
  4: '#ff887c',
  5: '#fbd75b',
  6: '#ffb878',
  7: '#46d6db', // Default
  8: '#e1e1e1',
  9: '#5484ed',
  10: '#51b749',
  11: '#dc2127',
}

const currentFormat = 'h:mma'
const upcomingFormat = 'ddd, MMM D'

const Event = ({ colorId, isFutureEvent, location, start, summary }) => {
  const { date, datetime, dateTime } = start
  const dateFormat = isFutureEvent ? upcomingFormat : currentFormat
  const isAllDay = !isFutureEvent && Boolean(date)
  const startDate = dayjs(date || datetime || dateTime).format(dateFormat)

  return (
    <Box display="flex">
      <Box
        alignItems="center"
        bgcolor={colors[colorId] ?? colors[7]}
        display="flex"
        justifyContent="center"
        width="25%"
      >
        <Typography variant="h5">{isAllDay ? 'All Day' : startDate}</Typography>
      </Box>
      <Box overflow="hidden" p="0.5em" maxWidth="70%">
        <Typography noWrap variant="h5">
          {summary}
        </Typography>
        {location && <Typography noWrap>{location}</Typography>}
      </Box>
    </Box>
  )
}

export default Event
