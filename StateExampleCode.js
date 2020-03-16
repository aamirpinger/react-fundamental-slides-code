import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    cityArray1: ["Karachi", "Lahore", "Peshawer", "Quetta"],
    cityArray2: ["Hyderabad", "Multan", "Gawader", "Mardan"]
  }
  render() {
    return (
      //You can also use <div> instead of <Fragment>
      <Fragment>
        <City cityArray={this.state.cityArray1} name="Aamir" />
        <City cityArray={this.state.cityArray2} name="Pinger" />
      </Fragment>
    )
  }
}

class City extends Component {

  render() {
    const cityArray = this.props.cityArray
    // you can also do like this
    //const { cityArray } = this.props

    return (
      //You can also use <div> instead of <Fragment>
      <Fragment>
        <ul>
          {
            cityArray.map((city) => <li key={city}> {city} </li>)
          }
        </ul>
        <h4> {this.props.name} </h4>
      </Fragment>
    )
  }
}
export default App;

