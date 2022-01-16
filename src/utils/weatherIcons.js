import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined'
import GrainOutlinedIcon from '@mui/icons-material/GrainOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'

// https://openweathermap.org/weather-conditions#How-to-get-icon-URL
const weatherIcons = {
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

export default weatherIcons
