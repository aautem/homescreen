import React from 'react'
import { render as renderApp } from 'react-dom'

import App from './components/App'
import './index.css'

renderApp(
  (
    <App />
  ),
  (
    document
    .getElementById('root')
  ),
)
