import React from 'react'
import PropType from 'prop-types'

class MyComponent extends React.Component {
  render () {
    const cityArray = this.props.cityArray

    const shortListedCities = cityArray.filter(city => city.length > 6)

    // this.props.myFunction()

    return (
      <ul>
        {shortListedCities.map(city => <li key={city}> {city} </li>)}
      </ul>
    )
  }
}

MyComponent.propTypes = {
  cityArray: PropType.array.isRequired
}

function MyFunctionalComponent (props) {
  return <h1>{props.heading}</h1>
}

function App () {
  const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  const cityArray2 = ['Hyderabad', 'Islamabad', 'Sawat', 'Gawader']

  const cityObj = { city1: 'Karachi', city2: 'Lahore', city3: 'Peshawar', city4: 'Quetta' }

  const myFunction = () => alert('Hello World')

  return (
    <div>
      <MyFunctionalComponent heading='Cities List' />
      <MyComponent cityArray={cityObj} myFunction={myFunction} />
      <MyComponent cityArray={cityArray2} myFunction={myFunction} />
    </div>
  )
}

export default App
