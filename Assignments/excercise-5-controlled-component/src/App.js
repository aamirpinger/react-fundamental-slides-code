import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Excercise</h1>        
        </header>
        <div className="container">
          <input type="text" placeholder="Write your text here" />
          <p className="echo">You are saying:</p>
          <p>What ever you type into the input field it should reflect here.</p>
        </div>
      </div>
    );
  }
}

export default App;

