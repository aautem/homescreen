import {
  WiDayCloudy,
  WiDayCloudyHigh,
  WiDayRain,
  WiDayRainMix,
  WiDayShowers,
  WiDaySnow,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayThunderstorm,
  WiNightClear,
  WiNightCloudy,
  WiNightCloudyHigh,
  WiNightPartlyCloudy,
  WiNightRain,
  WiNightRainMix,
  WiNightShowers,
  WiNightSnow,
  WiNightThunderstorm,
} from 'react-icons/wi'

// https://openweathermap.org/weather-conditions#How-to-get-icon-URL
// https://react-icons.github.io/react-icons/icons?name=wi
const weatherIcons = {
  '01d': WiDaySunny, // clear sky, day
  '01n': WiNightClear, // clear sky, night
  '02d': WiDaySunnyOvercast, // few clouds, day
  '02n': WiNightPartlyCloudy, // few clouds, night
  '03d': WiDayCloudy, // scattered clouds, day
  '03n': WiNightCloudy, // scattered clouds, night
  '04d': WiDayCloudyHigh, // broken clouds, day
  '04n': WiNightCloudyHigh, // broken clouds, night
  '09d': WiDayShowers, // shower rain, day
  '09n': WiNightShowers, // shower rain, night
  '10d': WiDayRain, // rain, day
  '10n': WiNightRain, // rain, night
  '11d': WiDayThunderstorm, // thunderstorm, day
  '11n': WiNightThunderstorm, // thunderstorm, night
  '13d': WiDaySnow, // snow, day
  '13n': WiNightSnow, // snow, night
  '50d': WiDayRainMix, // mist, day
  '50n': WiNightRainMix, // mist, night
}

export default weatherIcons
