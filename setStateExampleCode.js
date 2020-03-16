//App.js


// ****************************************************************
//
// Run following one at a time
//
// ****************************************************************

// ****************************************************************
//
//       setState Object base update approach
//
// ****************************************************************

import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    cityArray1: ["Karachi", "Lahore", "Peshawer", "Quetta"],
    cityArray2: ["Hyderabad", "Multan", "Gawader", "Mardan"],
  }

  render() {
    setTimeout(() => {
      // setState Object base update approach
      this.setState(
        {
          cityArray1: ["Pakistan", "USA", "Russia", "UK"]
        }
      )
    }, 3000)

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



// ****************************************************************
//
//       setState functional update approach
//
// ****************************************************************

// import React, { Component, Fragment } from 'react';

// class App extends Component {
//   state = {
//     cityArray1: ["Karachi", "Lahore", "Peshawer", "Quetta"],
//     cityArray2: ["Hyderabad", "Multan", "Gawader", "Mardan"],
//     number: 0,
//   }

//   render() {
  
//     setTimeout(() => {
//       // setState Functional update approach
//       this.setState((prevState) => (
//         {
//           cityArray1: ["Pakistan", "USA", "Russia", "UK"],
//           number: prevState.number + 1
//         })
//       )
//     }, 3000)

//     return (
//       //You can also use <div> instead of <Fragment>
//       <Fragment>
//         <City
//           cityArray={this.state.cityArray1}
//           name="Aamir"
//           number={this.state.number}
//         />
//         <City
//           cityArray={this.state.cityArray2}
//           name="Pinger"
//           number={this.state.number}
//         />
//       </Fragment>
//     )
//   }
// }

// class City extends Component {

//   render() {
//     const { cityArray, number, name } = this.props
//     // you can also do like this, but above is best practice
//     //const cityArray  = this.props.cityArray
//     //const number  = this.props.number

//     return (
//       //You can also use <div> instead of <Fragment>
//       <Fragment>
//         <ul>
//           {
//             cityArray.map((city) => <li key={city}> {city} </li>)
//           }
//         </ul>
//         <h4> {name} </h4>
//         <h1> {number} </h1>
//       </Fragment>
//     )
//   }
// }
// export default App;
