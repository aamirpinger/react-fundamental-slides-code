import React, { Component } from 'react'
import styled from 'styled-components'
import ButtonComponent, { Button } from '../ButtonComponent/ButtonComponent'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ControlledInputBox from '../ControlledInputBox'

const Button2 = styled(Button)`
  background-color: silver;
`

class MyComponent extends Component {
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

  componentDidUpdate (prevProps, prevState) {
    const cityArrayPrev = prevState.cityArray
    const cityArrayNew = this.state.cityArray

    if (cityArrayPrev !== cityArrayNew) {
      console.log('State updated with new data', cityArrayNew)
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

export default MyComponent
