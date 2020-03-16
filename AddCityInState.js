import React from 'react'

function ControlledInputBox (props) {
  const { handleInputChange, textBoxValue } = props

  return (
    <input type='text' value={textBoxValue} onChange={handleInputChange} />
  )
}

function ButtonComponent (props) {
  const { addCity } = props
  return (
    <button onClick={addCity}>Save changes</button>
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
      textBoxValue: ''
    }))
  }

  render () {
    const { cityArray, textBoxValue } = this.state
    
    return (
      <>
        <ul>
          {
            cityArray.map(city => <li key={city}> {city} </li>)
          }
        </ul>
        <ControlledInputBox textBoxValue={textBoxValue} handleInputChange={this.handleInputChange}/>
        <ButtonComponent addCity={() => this.addCity()}/>
      </>
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
