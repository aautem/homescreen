import { QueryClient, QueryClientProvider } from 'react-query'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Calendar from './components/Calendar'
import GoogleAuthProvider from './components/GoogleAuthProvider'
import Menu from './components/Menu'
import Stocks from './components/Stocks'
import Weather from './components/Weather'

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
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              height="100vh"
              justifyContent="space-between"
            >
              <Box>TODOS</Box>

              <Stocks />
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Calendar />
          </Grid>

          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              height="100vh"
              justifyContent="space-between"
            >
              <Weather />
              <Menu />
            </Box>
          </Grid>
        </Grid>
      </GoogleAuthProvider>
    </QueryClientProvider>
  )
}

export default App
