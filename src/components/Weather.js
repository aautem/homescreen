import { makeStyles } from '@material-ui/core/styles'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'
import Box from '@material-ui/core/Box'
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloseIcon from '@material-ui/icons/Close'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined'
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined'
import GrainOutlinedIcon from '@material-ui/icons/GrainOutlined'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'

import { useWeather } from '../hooks/useWeather'

// https://openweathermap.org/weather-conditions#How-to-get-icon-URL
const icons = {
  '01d': WbSunnyOutlinedIcon, // clear sky, day
  '01n': Brightness2OutlinedIcon, // clear sky, night
  '02d': CloudOutlinedIcon, // few clouds, day
  '02n': CloudOutlinedIcon, // few clouds, night
  '03d': CloudOutlinedIcon, // scattered clouds, day
  '03n': CloudOutlinedIcon, // scattered clouds, night
  '04d': CloudOutlinedIcon, // broken clouds, day
  '04n': CloudOutlinedIcon, // broken clouds, night
  '09d': GrainOutlinedIcon, // shower rain, day
  '09n': GrainOutlinedIcon, // shower rain, night
  '10d': GrainOutlinedIcon, // rain, day
  '10n': GrainOutlinedIcon, // rain, night
  '11d': FlashOnOutlinedIcon, // thunderstorm, day
  '11n': FlashOnOutlinedIcon, // thunderstorm, night
  '13d': AcUnitOutlinedIcon, // snow, day
  '13n': AcUnitOutlinedIcon, // snow, night
  '50d': GrainOutlinedIcon, // mist, day
  '50n': GrainOutlinedIcon, // mist, night
}

const useStyles = makeStyles(theme => ({
  paper: {
    alignItems: 'stretch',
    background: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    fontSize: '8em',
    justifyContent: 'space-around',
    padding: '0.1em',
  },
}))

const CurrentWeather = ({ classes, data }) => {
  if (!data) {
    return (
      <Paper className={classes.paper}>
        <CircularProgress color="secondary" />
      </Paper>
    )
  }

  const Icon = icons[data.weather[0].icon] ?? CloseIcon

  return (
    <Paper className={classes.paper}>
      <Icon fontSize="inherit" />
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Typography align="center" variant="h6">
          {data.weather[0].description}
        </Typography>
        <Typography align="center" variant="h2">
          {Math.round(data.temp)}&deg;F
        </Typography>
        <Typography align="center" variant="h6">
          feels like {Math.round(data.feels_like)}&deg;F
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Typography align="center">
          Dew Point: {Math.round(data.dew_point)}&deg;F
        </Typography>
        <Typography>Humidity: {data.humidity}%</Typography>
        <Typography>Sunrise: {data.sunriseTime}</Typography>
        <Typography>Sunset: {data.sunsetTime}</Typography>
        <Typography>Wind: {data.wind_speed}mph</Typography>
      </Box>
    </Paper>
  )
}

const Weather = () => {
  const classes = useStyles()
  const weatherQuery = useWeather()

  console.log({ weatherQuery })

  return (
    <Box p="2em">
      <CurrentWeather classes={classes} data={weatherQuery.data?.now} />
      <br />
      <Paper className={classes.paper}>
        <Typography align="center" variant="h5">
          At {weatherQuery.data?.later?.time}:{' '}
          {Math.round(weatherQuery.data?.later?.temp ?? 0)}&deg;F,{' '}
          {weatherQuery.data?.later?.weather?.[0]?.description}
        </Typography>
      </Paper>
      <br />
      <Grid container spacing={2}>
        {(weatherQuery.data?.daily ?? []).map(w => {
          return (
            <Grid item key={w.dt} xs={4}>
              <Paper className={classes.paper}>
                <Box>
                  <Typography align="center" variant="h5">
                    {w.day}
                  </Typography>
                  <Typography align="center" variant="h4">
                    {Math.round(w.temp.day)}&deg;F
                  </Typography>
                  <Typography align="center">
                    {w.weather[0].description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Weather
