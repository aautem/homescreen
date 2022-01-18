import dayjs from 'dayjs'

const dayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const dayStyle = {
  alignItems: 'center',
  display: 'flex',
  fontSize: '1.5rem',
  height: '2.5rem',
  justifyContent: 'center',
  opacity: 0.7,
  width: '2.5rem',
}

// TODO: Refresh when day changes
// useEffect - get current time then setTimeout for diff bw now and midnight
const Calendar = () => {
  const today = dayjs()
  const firstOfMonth = today.startOf('month')
  const firstDayOfMonth = firstOfMonth.day()

  const prevMonthDays = []
  const currentMonthDays = []
  const nextMonthDays = []

  // Add days for previous month
  if (firstDayOfMonth > 0) {
    const prevMonth = firstOfMonth.subtract(1, 'month')
    const lastDay = prevMonth.endOf('month').date()

    for (let d = firstDayOfMonth; d > 0; d--) {
      prevMonthDays.unshift(lastDay - prevMonthDays.length)
    }
  }

  // Add days for current month
  const lastDay = today.endOf('month').date()
  for (let d = 1; d <= lastDay; d++) currentMonthDays.push(d)

  // Add days for next month
  const dayCount = prevMonthDays.length + currentMonthDays.length
  let d = 1

  while (dayCount + nextMonthDays.length < 42) {
    nextMonthDays.push(d)
    d++
  }

  return (
    <div
      style={{
        alignContent: 'center',
        background: 'rgb(95, 158, 160)',
        bottom: '50%',
        display: 'grid',
        left: '75%',
        padding: '1rem',
        position: 'absolute',
        right: 0,
        top: 0,
      }}
    >
      <div
        style={{
          color: 'white',
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          placeItems: 'center',
        }}
      >
        <div
          style={{
            gridColumn: '1 / 8',
            fontSize: '2rem',
            marginBottom: '0.5rem',
          }}
        >
          {today.format('MMMM YYYY')}
        </div>

        {dayLabels.map(d => (
          <div key={d} style={{ opacity: 0.7 }}>
            {d}
          </div>
        ))}

        {prevMonthDays.map(d => (
          <div key={d} style={dayStyle}>
            {d}
          </div>
        ))}

        {currentMonthDays.map(d => (
          <div
            key={d}
            style={{
              ...dayStyle,
              background: d === today.date() ? 'white' : undefined,
              borderRadius: '50%',
              color: d === today.date() ? 'black' : 'inherit',
              fontWeight: 'bold',
              opacity: 1,
            }}
          >
            {d}
          </div>
        ))}

        {nextMonthDays.map(d => (
          <div key={d} style={dayStyle}>
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
