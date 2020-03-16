import React from 'react'

class MyComponent extends React.Component {
  render () {
    const cityArray = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']

    const shortListedCities = cityArray.filter(city => city.length > 6)
    return (
      <ul>
        {
          shortListedCities.map(city => <li key={city}> {city} </li>)
        }
      </ul>
    )
  }
}

function App () {
  return (<MyComponent />)
}

export default App
