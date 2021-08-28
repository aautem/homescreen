import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useWeather } from '../hooks/useWeather'

const Weather = () => {
  const weatherQuery = useWeather()

  console.log({ weatherQuery })

  return (
    <Box p="2em">
      <Grid container spacing={2} wrap="wrap-reverse">
        <Typography>WEATHER</Typography>
      </Grid>
    </Box>
  )
}

export default Weather
