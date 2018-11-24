// import PropTypes from 'prop-types'
import React from 'react'
import './App.css'

import { DateTimeProvider } from '../contexts/DateTime'
import { WeatherProvider } from '../contexts/Weather'

import Greeting from './Greeting'
import Today from './Today'
import Clock from './Clock'
import Calendar from './Calendar'
import StocksRow from './StocksRow'
import Tomorrow from './Tomorrow'
import Footer from './Footer'

const App = () => (
  <div className="App">
    <div className="App_frame">
      <DateTimeProvider>
        <WeatherProvider>

          <Greeting />

          <Today />

          <Clock />

          <Calendar />

          <StocksRow />

          <Tomorrow />

          <Footer />

        </WeatherProvider>
      </DateTimeProvider>
    </div>
  </div>
)

export default App
