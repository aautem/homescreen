import { QueryClient, QueryClientProvider } from 'react-query'

import Calendar2 from './components/Calendar2'
import Forecast from './components/Forecast'
import GoogleAuthProvider from './components/GoogleAuthProvider'
import NFTs from './components/NFTs'
import Schedule from './components/Schedule'
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
        <NFTs />
        <Schedule />
        <Calendar2 />

        <div
          style={{
            background: 'red',
            bottom: 0,
            left: 0,
            position: 'absolute',
            right: '75%',
            top: '50%',
          }}
        >
          stocks
        </div>
        <div
          style={{
            background: 'purple',
            bottom: 0,
            left: '25%',
            position: 'absolute',
            right: '50%',
            top: '50%',
          }}
        >
          todo
        </div>
        <div
          style={{
            background: 'pink',
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
      </GoogleAuthProvider>
    </QueryClientProvider>
  )
}

export default App
