import { QueryClient, QueryClientProvider } from 'react-query'

import Calendar2 from './components/Calendar2'
import GoogleAuthProvider from './components/GoogleAuthProvider'
import NFTs from './components/NFTs'
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
            gap: '0.5rem',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gridTemplateAreas: `
              "nfts schedule schedule calendar"
              "stocks todo shopping forecast"
            `,
            height: 'auto',
            left: 0,
            margin: '0.5rem',
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <div style={{ gridArea: 'nfts' }}>
            <NFTs />
          </div>
          <div style={{ gridArea: 'schedule', background: 'grey' }}>
            SCHEDULE
          </div>
          <div
            style={{
              alignContent: 'center',
              background: 'rgba(65, 105, 225, 1)',
              display: 'grid',
              gridArea: 'calendar',
            }}
          >
            <Calendar2 />
          </div>
          <div style={{ gridArea: 'stocks' }}>STOCKS</div>
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
