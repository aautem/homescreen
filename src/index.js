import React from 'react'
import { render as renderApp } from 'react-dom'

import './index.css'
import App from './components/App'

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
