import 'react-app-polyfill/ie9'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import './scss/reset.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
