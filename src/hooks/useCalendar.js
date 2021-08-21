import { useQuery } from 'react-query'

// https://developers.google.com/calendar/api/v3/reference/events/list
async function fetchCalendarEvents() {
  const response = await window.gapi.client.calendar.events.list({
    calendarId: 'primary',
    maxResults: 50,
    orderBy: 'startTime',
    showDeleted: false,
    singleEvents: true,
    timeMin: new Date().toISOString(),
  })

  return response.result.items.filter(i => i.visibility !== 'private')
}

export function useCalendar(isAuthenticated) {
  return useQuery(['calendar'], fetchCalendarEvents, {
    enabled: isAuthenticated,
    refetchInterval: 1000 * 60 * 60, // 1hr
  })
}
