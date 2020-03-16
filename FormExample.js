// Good article to read on form https://medium.com/javascript-inside/better-understanding-forms-in-react-a85d889773ce

import React from 'react'

function ControlledInputBox (props) {
  const { handleInputChange, textBoxValue } = props

  return (
    <input type='text' value={textBoxValue} onChange={handleInputChange} />
  )
}

function ButtonComponent (props) {
  return (
    <button>Save changes</button>
  )
}

class MyComponent extends React.Component {
  state = {
      cityArray: ['Karachi', 'Lahore', 'Peshawar', 'Quetta'],
      textBoxValue: ''
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

    if(textBoxValue === '') {
      alert('Please enter city name to save')
    } else {
      this.addCity()
    }
  }

  render () {
    const { cityArray, textBoxValue } = this.state
    
    return (
      <form onSubmit={this.handleForm}>
        <ul>
          {
            cityArray.map(city => <li key={city}> {city} <button value={city} onClick={this.removeCity}>X</button></li>)
          }
        </ul>
        <ControlledInputBox textBoxValue={textBoxValue} handleInputChange={this.handleInputChange}/>
        <ButtonComponent />
      </form>
    )
  }
}

function MyFunctionalComponent (props) {
  const { heading } = props
  return <h1>{heading}</h1>
}

function App () {
  return (
    <div>
      <MyFunctionalComponent heading='Cities List' />
      <MyComponent />
    </div>
  )
}

export default App
