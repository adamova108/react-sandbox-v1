import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends Component {

  constructor() {
    super();

    this.state = {
      string: 'HUJJ HUJJ',
      monsters: [
        {
          name: 'Frankenstein',
        },
        {
          name: 'Dracula',
        },
        {
          name: 'Dick',
        },
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.monsters.map(mnstre => <h1>{mnstre.name} the MOFO</h1>) }
          <img src={logo} className="App-logo" alt="logo" />
          <p>{'{' + this.state.string + '}'}</p>
          <button onClick={() => this.setState({ string: 'Jóska ' + (new Date()).getSeconds() })}>Klikk</button>
        </header>
      </div>
    );
  }
}

export default App;
