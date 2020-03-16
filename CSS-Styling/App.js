// Good article to read on form https://medium.com/javascript-inside/better-understanding-forms-in-react-a85d889773ce

import React from 'react'
import './App.css'


function ErrorMessage(props) {
  const { message } = props

  return <span style={{ color: 'red' }}>{message}</span>
}

function ControlledInputBox(props) {
  const { handleInputChange, textBoxValue, noCityFlag } = props

  return (
    <>
      <input type='text' value={textBoxValue} onChange={handleInputChange} />
      {noCityFlag && <ErrorMessage message='Enter city name' />}
    </>
  )
}

function ButtonComponent(props) {
  return (
    <button>Save changes</button>
  )
}



class MyComponent extends React.Component {
  state = {
    cityArray: ['Karachi', 'Lahore', 'Peshawar', 'Quetta'],
    textBoxValue: '',
    noCityFlag: false,
  }

  handleInputChange = (e) => {
    const { value } = e.target
    this.setState({
      textBoxValue: value
    })
  }

  addCity = () => {
    const { textBoxValue } = this.state

    this.setState(prevState => ({
      cityArray: [...prevState.cityArray, textBoxValue],
      textBoxValue: '',
      noCityFlag: false
    }))
  }

  removeCity = (event) => {
    const { cityArray } = this.state
    const { value } = event.target

    const newCityArray = cityArray.filter(city => city !== value)

    this.setState({
      cityArray: newCityArray
    })
  }

  handleForm = (event) => {
    const { textBoxValue } = this.state

    event.preventDefault()

    if (textBoxValue === '') {
      this.setState({ noCityFlag: true })
    } else {
      this.addCity()
    }
  }

  render() {
    const { cityArray, textBoxValue, noCityFlag } = this.state

    return (
      <form onSubmit={this.handleForm}>
        <ul>
          {
            cityArray.map(city => <li className='li-styling' key={city} style={{ color: cityArray.length > 5 ? 'red' : 'blue' }}> 
              {city} 
              <button className='li-styling' value={city} onClick={this.removeCity}>X</button>
            </li>)
          }
        </ul>
        <ControlledInputBox textBoxValue={textBoxValue} handleInputChange={this.handleInputChange} noCityFlag={noCityFlag} />
        <ButtonComponent />
      </form>
    )
  }
}

function MyFunctionalComponent(props) {
  const { heading } = props
  return <h1>{heading}</h1>
}

function App() {
  const someCondition = true // try changing true with false

  if (someCondition === true) {
    return (
      <div>
        <MyFunctionalComponent heading='Cities List' />
        <MyComponent />
      </div>
    )
  } else {
    return (
      <h1>Sorry nothing to display</h1>
    )
  }
}

export default App
