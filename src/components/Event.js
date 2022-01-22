import dayjs from 'dayjs'

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

export default Event
