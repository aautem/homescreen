import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Calendar from './components/Calendar'
import GoogleAuthProvider from './components/GoogleAuthProvider'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAuthProvider>
        <Box bgcolor="#aaa" display="flex" height="100vh" overflow="hidden">
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <Box height="100vh" bgcolor="pink">
                LEFT
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Calendar />
            </Grid>

            <Grid item xs={4}>
              <Box height="100vh" bgcolor="pink">
                RIGHT
              </Box>
            </Grid>
          </Grid>
        </Box>
      </GoogleAuthProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
