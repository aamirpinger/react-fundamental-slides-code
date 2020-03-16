import React from 'react'

class MyComponent extends React.Component {
  render () {
    const cityArray = this.props.cityArray

    const shortListedCities = cityArray.filter(city => city.length > 6)

    return (
      <ul>
        {shortListedCities.map(city => <li key={city}> {city} </li>)}
      </ul>
    )
  }
}

function App () {
  const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  const cityArray2 = ['Hyderabad', 'Islamabad', 'Sawat', 'Gawader']

  return (
    <div>
      <MyComponent cityArray={cityArray1} />
      <MyComponent cityArray={cityArray2} />
    </div>
  )
}

export default App
