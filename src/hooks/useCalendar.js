import { useQuery } from 'react-query'

// https://developers.google.com/calendar/api/v3/reference/events/list
async function fetchCalendarEvents() {
  const response = await window.gapi.client.calendar.events.list({
    calendarId: 'primary',
    maxResults: 20,
    orderBy: 'startTime',
    showDeleted: false,
    singleEvents: true,
    timeMin: new Date().toISOString(),
  })

  return response.result.items.filter(i => i.visibility !== 'private')
}

// TODO: Pass `calendarId` to use multiple calendars (holidays, etc.)
export function useCalendar(isAuthenticated) {
  return useQuery(['calendar'], fetchCalendarEvents, {
    enabled: isAuthenticated,

    // TODO: invalidate query instead
    // refetchInterval: 1000 * 60 * 60, // 1hr
  })
}
