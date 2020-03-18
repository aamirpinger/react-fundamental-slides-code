import React from 'react'
import MyFunctionalComponent from './MyFunctionalComponent/MyFunctionalComponent'
import MyComponent from './MyComponent/MyComponent'
import ErrorMessage from './ErrorMessage/ErrorMessage'

import './App.css'

function App () {
  const showSite = true

  if (showSite) {
    return (
      <div>
        <MyFunctionalComponent heading='Cities List' />
        <MyComponent />
      </div>
    )
  } else {
    return <ErrorMessage errorMsg='Site under maintenance' />
  }
}

export default App
