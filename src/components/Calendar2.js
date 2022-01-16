import dayjs from 'dayjs'

const dayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

// TODO: Refresh when day changes
const Calendar2 = () => {
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
        color: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        placeItems: 'center',
      }}
    >
      <h2 style={{ gridColumn: '1 / 8' }}>{today.format('MMMM YYYY')}</h2>

      {dayLabels.map(d => (
        <h4 key={d}>{d}</h4>
      ))}

      {prevMonthDays.map(d => (
        <span
          key={d}
          style={{
            alignItems: 'center',
            display: 'flex',
            height: '2rem',
            justifyContent: 'center',
            opacity: 0.7,
            width: '2rem',
          }}
        >
          {d}
        </span>
      ))}

      {currentMonthDays.map(d => (
        <span
          key={d}
          style={{
            alignItems: 'center',
            background: d === today.date() ? 'white' : undefined,
            borderRadius: '50%',
            color: d === today.date() ? 'black' : 'inherit',
            display: 'flex',
            fontWeight: 'bold',
            height: '2rem',
            justifyContent: 'center',
            width: '2rem',
          }}
        >
          {d}
        </span>
      ))}

      {nextMonthDays.map(d => (
        <span
          key={d}
          style={{
            alignItems: 'center',
            display: 'flex',
            height: '2rem',
            justifyContent: 'center',
            opacity: 0.7,
            width: '2rem',
          }}
        >
          {d}
        </span>
      ))}
    </div>
  )
}

export default Calendar2
