import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const dayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const dayStyle = {
  alignItems: 'center',
  display: 'flex',
  height: '1.75rem',
  justifyContent: 'center',
  opacity: 0.7,
  width: '1.75rem',
}

const Calendar = () => {
  const [today, setToday] = useState(dayjs())
  const firstOfMonth = today.startOf('month')
  const firstDayOfMonth = firstOfMonth.day()

  useEffect(() => {
    const startOfTomorrow = today.add(1, 'day').startOf('day')
    const msLeftInDay = startOfTomorrow.valueOf() - today.valueOf()
  
    const timeout = setTimeout(() => {
      setToday(dayjs())
    }, msLeftInDay)

    return () => clearTimeout(timeout)
  }, [today])

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
          gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          placeItems: 'center',
          rowGap: '1rem',
        }}
      >
        <div
          style={{
            gridColumn: '1 / 8',
            fontSize: '1.5rem',
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
