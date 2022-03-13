import { QueryClient, QueryClientProvider } from 'react-query'

import Calendar from './components/Calendar'
import Forecast from './components/Forecast'
import Gallery from './components/Gallery'
import GoogleAuthProvider from './components/GoogleAuthProvider'
import Schedule from './components/Schedule'
import Shopping from './components/Shopping'
import Stocks from './components/Stocks'
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
      <Gallery />
      <GoogleAuthProvider>
        <Schedule />
      </GoogleAuthProvider>
      <Calendar />
      <Stocks />
      <Todos />
      <Shopping />
      <Forecast />
    </QueryClientProvider>
  )
}

export default App
