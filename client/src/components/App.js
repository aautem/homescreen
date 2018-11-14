// import PropTypes from 'prop-types'
import React from 'react'
import './App.css'

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

      <Greeting />

      <Today />

      <Clock />

      <Calendar />

      <StocksRow />

      <Tomorrow />

      <Footer />

    </div>
  </div>
)

export default App
