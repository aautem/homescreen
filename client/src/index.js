import React from 'react'
import { render as renderApp } from 'react-dom'

import App from './components/App'
import './index.sass'

renderApp(
  (
    <App />
  ),
  (
    document
    .getElementById('root')
  ),
)
