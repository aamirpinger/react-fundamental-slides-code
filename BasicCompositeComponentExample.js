/*
// Simple component

import React, { Component } from 'react';

class App extends Component {
  cities = ["Karachi", "Lahore", "Peshawer", "Quetta"],

  render() {
    return (
      <ul >
        cities.map((city) => <li key={city}>{city}</li>
      </ul>
    );
  }
}

export default App

*/

// ***************************************************
//
// Composite component Example
//
// ***************************************************

import React, { Component } from 'react';

class City extends Component {
  cities = ["Karachi", "Lahore", "Peshawer", "Quetta"],

  render() {
    return (
      <ul >
        cities.map((city) => <li key={city}>{city}</li>
      </ul>
    );
  }
}

class Country extends Component {
  countries = ["Pakistan", "USA", "UK", "Turkey"],

  render() {
    return (
      <ul >
        countries.map((country) => <li key={country}>{country}</li>
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <City />
      <Country />
      <City />
  );
  }
}
export default App
