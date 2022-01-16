import { QueryClient, QueryClientProvider } from 'react-query'

import Calendar2 from './components/Calendar2'
import GoogleAuthProvider from './components/GoogleAuthProvider'
import TimeAndTemp from './components/TimeAndTemp'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAuthProvider>
        <TimeAndTemp />

        <div
          style={{
            bottom: 0,
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gridTemplateAreas: `
              "left schedule schedule calendar"
              "left todo shopping forecast"
            `,
            height: 'auto',
            left: 0,
            margin: '1rem',
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <div style={{ gridArea: 'left', background: 'pink' }}>
            CONTENT (STOCKS/MENU/NFTS)
          </div>
          <div style={{ gridArea: 'schedule', background: 'grey' }}>
            SCHEDULE
          </div>
          <div
            style={{
              alignContent: 'center',
              display: 'grid',
              gridArea: 'calendar',
            }}
          >
            <Calendar2 />
          </div>
          <div style={{ gridArea: 'todo', background: 'green' }}>TODO</div>
          <div style={{ gridArea: 'shopping', background: 'orange' }}>
            SHOPPING
          </div>
          <div style={{ gridArea: 'forecast', background: 'yellow' }}>
            FORECAST
          </div>
        </div>
      </GoogleAuthProvider>
    </QueryClientProvider>
  )
}

export default App
