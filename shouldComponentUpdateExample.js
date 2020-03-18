import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css'

const Button = styled.button`
  background-color: white;
  color: navy;
  width: 80px;
  height: 40px;
`

const H1 = styled.h1`
  font-size: 36px;
  color: Olive;
`
const Button2 = styled(Button)`
  background-color: silver;
`

function ControlledInputBox (props) {
  const { handleInputChange, textBoxValue, errorShowFlag } = props

  return (
    <>
      <input type='text' value={textBoxValue} onChange={handleInputChange} />
      {errorShowFlag && <ErrorMessage errorMsg='Please enter city name' />}
    </>
  )
}

function ButtonComponent () {
  return (
    <>
      <Button>Add City</Button>
    </>
  )
}

function ErrorMessage (props) {
  const { errorMsg } = props

  return <span style={{ color: 'red' }}>{errorMsg}</span>
}

class MyComponent extends React.Component {
  state = {
    cityArray: [],
    textBoxValue: '',
    errorShowFlag: false
  }

  componentDidMount () {
    /** External API call can be done here and update the state when data received */
    const dataReceivedFromAPICall = [
      'Karachi',
      'Lahore',
      'Peshawar',
      'Quetta',
      'Swat'
    ]

    setTimeout(() => {
      this.setState({
        cityArray: dataReceivedFromAPICall
      })
    }, 1000)
  }

  shouldComponentUpdate (nextProps, nextState) {
    const { cityArray } = nextState
    const findCity = cityArray.indexOf('Swat')

    // Remove 'Swat' from componentDidMount method and see the change on browser
    if (findCity === -1) return false

    return true
  }

  handleInputChange = e => {
    const { value } = e.target
    this.setState({
      textBoxValue: value,
      errorShowFlag: false
    })
  }

  addCity = () => {
    const { textBoxValue } = this.state

    this.setState(prevState => ({
      cityArray: [...prevState.cityArray, textBoxValue],
      textBoxValue: ''
    }))
  }

  removeCity = event => {
    const { cityArray } = this.state
    const { value } = event.target

    const newCityArray = cityArray.filter(city => city !== value)

    this.setState({
      cityArray: newCityArray
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { textBoxValue } = this.state

    if (textBoxValue === '') {
      this.setState({
        errorShowFlag: true
      })
    } else {
      this.addCity()
    }
  }

  render () {
    const { cityArray, textBoxValue, errorShowFlag } = this.state
    const showSite = cityArray.length !== 0

    return !showSite ? (
      <ErrorMessage errorMsg='Loading data...' />
    ) : (
      <>
        <ul style={{ border: '2px dotted navy', padding: '20px' }}>
          {cityArray.map(city => (
            <li
              key={city}
              className='listItem'
              style={{ color: cityArray.length < 6 ? 'blue' : 'red' }}
            >
              {city}
              <Button2 value={city} onClick={this.removeCity}>
                X
              </Button2>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <ControlledInputBox
            errorShowFlag={errorShowFlag}
            textBoxValue={textBoxValue}
            handleInputChange={this.handleInputChange}
          />
          <ButtonComponent />
        </form>
      </>
    )
  }
}

function MyFunctionalComponent (props) {
  const { heading } = props
  return <H1 style={{ textDecoration: 'underline' }}>{heading}</H1>
}

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
