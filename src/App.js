import { QueryClient, QueryClientProvider } from 'react-query'

import Calendar from './components/Calendar'
import Forecast from './components/Forecast'
import GoogleAuthProvider from './components/GoogleAuthProvider'
import NFTs from './components/NFTs'
import Schedule from './components/Schedule'
import Time from './components/Time'
import Todos from './components/Todos'

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
      <Time />
      <NFTs />
      <GoogleAuthProvider>
        <Schedule />
      </GoogleAuthProvider>
      <Calendar />

      <div
        style={{
          background: 'rgb(80, 80, 80)',
          bottom: 0,
          left: 0,
          position: 'absolute',
          right: '75%',
          top: '50%',
        }}
      >
        stocks
      </div>

      <Todos />

      <div
        style={{
          background: 'lightgrey',
          bottom: 0,
          left: '50%',
          position: 'absolute',
          right: '25%',
          top: '50%',
        }}
      >
        shopping
      </div>

      <Forecast />
    </QueryClientProvider>
  )
}

export default App
