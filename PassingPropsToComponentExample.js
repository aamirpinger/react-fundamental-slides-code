// App.js file

import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      //You can also use <div> instead of <Fragment>
      <Fragment>
        <City cityArray={["Karachi", "Lahore", "Peshawer", "Quetta"]} name="Aamir" />
        <City cityArray={["Hyderabad", "Multan", "Gawader", "Mardan"]} name="Pinger" />
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
