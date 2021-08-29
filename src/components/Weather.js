import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloseIcon from '@material-ui/icons/Close'
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'

import { useWeather } from '../hooks/useWeather'

const icons = {
  '01d': WbSunnyOutlinedIcon,
  '03d': CloudOutlinedIcon,
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
