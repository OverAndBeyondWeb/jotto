import React, { Component } from 'react';

import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <h1>Welcome to Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[{guessedWord: 'five', letterMatchCount: 5}]}/>
      </div>
    );
  }
}

export default App;
