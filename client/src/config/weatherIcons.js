import {
  FiCloud,
  // FiCloudDrizzle,
  // FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  // FiHelpCircle,
  FiMoon,
  FiSun,
  // FiSunrise,
  // FiSunset,
  // FiWind,
} from 'react-icons/fi'

export const weatherIconProps = {
  size: '1.6em',
}

export const weatherIcons = {
  'clear-day': FiSun,
  'clear-night': FiMoon,
  'cloudy': FiCloud,
  'partly-cloudy-day': FiCloud,
  'partly-cloudy-night': FiCloud,
  'rain': FiCloudRain,
  'snow': FiCloudSnow,
}
