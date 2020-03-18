import React from 'react'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import Routes from '../Routes'
import { Link } from 'react-router-dom'

import './App.css'

function App () {
  const showSite = true

  if (showSite) {
    return (
      <div>
        <Routes />
        <Link to='/'>Goto to Home Page</Link>
        <br />
        <Link to='/aboutus'>Goto to About Us Page</Link>
      </div>
    )
  } else {
    return <ErrorMessage errorMsg='Site under maintenance' />
  }
}

export default App
