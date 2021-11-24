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
          id : 'm-1',
          name: 'Frankenstein',
        },
        {
          id : 'm-2',
          name: 'Dracula',
        },
        {
          id : 'm-3',
          name: 'Dick',
        },
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { 
            this.state.monsters.map(
              mnstre => <h3 key={mnstre.id}>{mnstre.name} the MOFO.</h3>
            ) 
          }
          <img src={logo} className="App-logo" alt="logo" />
          <p>{'{' + this.state.string + '}'}</p>
          <button onClick={() => this.setState({ string: 'Jóska ' + (new Date()).getSeconds() })}>Klikk</button>
          <br/>
          <br/>
          <br/>
        </header>
      </div>
    );
  }
}

export default App;
