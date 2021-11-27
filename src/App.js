import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

//import './components/card-list/card-list.styles.css';

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
    
    this.akarmi = new Promise(function(resolve, reject) {
      setTimeout(() => {
         resolve('{"data": 123}');
      }, 1000);
    });

  }
  
  componentDidMount() {

    this.akarmi.then(val => JSON.parse(val)).then(arr => console.log(arr));

    this.akarmi.then(val => {
      let arr = JSON.parse(val);
      console.log(arr);
    });


    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
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

      /* fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { 

        // This deosn't work - WHY?

        var mnstrs = response.json();

        if (mnstrs.length) 
          this.setState({monsters: mnstrs})
        else 
          this.setState({monsters: [{id: 'errorka', name: 'ErrorkA'}]})
      })
      .catch((error) => {
        console.log('Error:', error);
      }); */

    }, 1000);
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Uff />
          <Fica />
          <Heye />
          <CardList name="HUHH" klukka='{"klikka":"mukka"}'>
          { 
            this.state.monsters.map(
              (mnstre, i) => <h3 key={mnstre.id} id={"mnstre_" + i}>{mnstre.name} the MOFO. {i}</h3>
            ) 
          }
          </CardList>
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

// Class declaration

class Uff extends Component {

  constructor() {
    super();

    this.state = {
      title: 'TÁJTÜL'
    }
  }

  render() {
    return (<p>{this.state.title}</p>);
  }

}

// Function ver 2

export const Fica = props => (
  <h3>Itten</h3>
);

// Function ver 1

function Heye() {
  return (
    <h5>Ottan</h5>
  );
}

export default App;
