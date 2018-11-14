import React from 'react'

import { FiHelpCircle } from 'react-icons/fi'

import {
  weatherIcons,
  weatherIconProps,
} from '../config/weatherIcons'

const renderWeatherIcon = (
  ({ icon }) => (
    console.log({ iconName: icon, icon: weatherIcons[icon] }) ||

    weatherIcons[icon]
    ? weatherIcons[icon](weatherIconProps)
    : <FiHelpCircle {...weatherIconProps} />
  )
)

export default renderWeatherIcon
