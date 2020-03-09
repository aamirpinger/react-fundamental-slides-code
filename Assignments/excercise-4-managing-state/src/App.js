import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);
const number3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bootcamp - Train the Trainer - Coding Practice</h1>        
	</header>
        <div className="game">
          <h2>ADD THE NUMBERS GAME</h2>
          <div className="equation">
            <p className="text">{`${number1} + ${number2} + ${number3} = ${proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            You have answered {numCorrect} question answered correctly out of total {numQuestions} questions.
          </p>
        </div>
      </div>
    );
  }
}

export default App;

