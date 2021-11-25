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
      monsters: [{id: 'njmn', name: 'uff'}]
    }
    
  }
  
  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/usersasd')
      .then(response => response.json())
      .then(mnstrs => {
        if (mnstrs.length) 
          this.setState({monsters: mnstrs})
        else 
        this.setState({monsters: [{id: 'errorka', name: 'ErrorkA'}]})
      })
      .catch((error) => {
        console.log('Error:', error);
      });
    }, 1000);
    
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { 
            this.state.monsters.map(
              (mnstre, i) => <h3 key={mnstre.id} id={"mnstre_" + i}>{mnstre.name} the MOFO. {i}</h3>
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
