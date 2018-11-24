import React from 'react'
import './Today.sass'

import Date from './Date'
import CurrentWeather from './CurrentWeather'

const Today = () => (
  <div className="Today">
    <div className="Today_content">
      <Date />
      <CurrentWeather />
    </div>
  </div>
)

export default Today
