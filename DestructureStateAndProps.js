import React from 'react'

class MyComponent extends React.Component {
  state = {
      cityArray: ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
    }
  
  render () {
    const { myFunction } = this.props
    const { cityArray } = this.state

    myFunction()

    return (
      <ul>
        {
          cityArray.map(city => <li key={city}> {city} </li>)
        }
      </ul>
    )
  }
}

function MyFunctionalComponent (props) {
  const { heading } = props
  return <h1>{heading}</h1>
}

function App () {
  const myFunction = () => alert('Hello World')

  return (
    <div>
      <MyFunctionalComponent heading='Cities List' />
      <MyComponent myFunction={myFunction} />
    </div>
  )
}

export default App
