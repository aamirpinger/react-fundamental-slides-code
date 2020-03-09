import React from 'react'

class MyComponent extends React.Component {
  render () {
    const cityArray = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']

    return (
      <ul>
        {
          cityArray.map((city) => <li key={city}> {city} </li>)
        }
      </ul>
    )
  }
}

function App () {
  return (<MyComponent />)
}

export default App
