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

  static getDerivedStateFromProps (props, state) {
    const { cityArray } = props

    return {
      cityArray
    }
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

    return (
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
  const cityArray = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']

  if (showSite) {
    return (
      <div>
        <MyFunctionalComponent heading='Cities List' />
        <MyComponent cityArray={cityArray} />
      </div>
    )
  } else {
    return <ErrorMessage errorMsg='Site under maintenance' />
  }
}

export default App
