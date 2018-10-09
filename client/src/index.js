import React from 'react'
import { render as renderApp } from 'react-dom'

import App from './components/App'
import './index.css'

const controller = {
  start: () => {},
  // store: () => {},
}

renderApp(
  <App {...controller} />,
  document.getElementById('root')
)

// function startApp() {
//   setInterval()

// }
