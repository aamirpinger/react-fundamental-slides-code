/**

1st step: rename this file with the name App.js in the src folder after creating
initial app with npx create-react-app <project name>

2nd step: Run npm start to run the application

3rd step: Goto to browser and type localhost:3000

*/

import React from 'react'
import logo from './logo.svg'
import './App.css'

class MyComponent extends React.Component {
  render () {
    return (
      <div>
        <h1> Hello world </h1>
      </div>
    )
  }
}

function App () {
  return (
    <MyComponent />
  )
}

export default App
