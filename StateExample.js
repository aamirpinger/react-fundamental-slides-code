import React from 'react'
import PropType from 'prop-types'

class MyComponent extends React.Component {
  state = {
      cityArray: ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
    }
    
  render () {
    return (
      <ul>
        {
          this.state.cityArray.map(city => <li key={city}> {city} </li>)
        }
      </ul>
    )
  }
}

function App () {
  return (
    <div>
      <MyComponent />
    </div>
  )
}

export default App
