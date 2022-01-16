import { QueryClient, QueryClientProvider } from 'react-query'

import Calendar2 from './components/Calendar2'
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
        <div
          style={{
            background: 'grey',
            bottom: 0,
            left: '75%',
            position: 'absolute',
            right: 0,
            top: '50%',
          }}
        >
          forecast
        </div>
      </GoogleAuthProvider>
    </QueryClientProvider>
  )
}

export default App
