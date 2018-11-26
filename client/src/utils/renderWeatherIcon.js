import React from 'react'

import { FiHelpCircle } from 'react-icons/fi'

import {
  weatherIcons,
  weatherIconProps,
} from '../config/weatherIcons'

const renderWeatherIcon = (
  ({ icon }) => (
    weatherIcons[icon]
    ? weatherIcons[icon](weatherIconProps)
    : (
      console.warn('Missing weather icon:', `"${icon}"`) ||
      <FiHelpCircle {...weatherIconProps} />
    )
  )
)

export default renderWeatherIcon
