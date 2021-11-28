import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
//import './components/card-list/card-list.styles.css';



import logo from './logo.svg';
import './App.css';
import { SearchBox as SearchBuxa } from './components/search-box/search-box.component';

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
      josika: 'pistika',
      monsters: [{id: 'njmn', name: 'uff'}],
      searchField: ''
    }
    
    this.akarmi = new Promise(function(resolve, reject) {
      setTimeout(() => {
         resolve('{"data": 123}');
      }, 1000);
    });

    this.joska = 'pista';

    //this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {

    // Same result --- Why does 'fetch()' works only with .then().then() ?

    /* this.akarmi.then(val => JSON.parse(val)).then(arr => console.log(arr));

    this.akarmi.then(val => {
      let arr = JSON.parse(val);
      console.log(arr);
    }); */


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

  /* handleChange(e) {
    this.setState({ searchField: e.target.value }, () => { console.log('Immediate results'); });
  } */

  handleChange = e => {
    this.setState({ searchField: e.target.value }, () => { console.log('Immediate results'); });
  }

  handleClick(e) {
    this.setState({josika: 'target: ' + e.target.tagName});
  }


  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(moni => moni.name.toLowerCase().includes(searchField.toLowerCase()));

    return (

      <div className="App">
        <header className="App-header">
          <Uff />
          <Fica />
          <Heye />
          { 
            //<CardList name="HUHH" klukka='{"klikka":"mukka"}'></CardList>
          }
          {
            /*<input 
            type='search' 
            placeholder='search monsters' 
            onChange={e => {
              this.setState({ searchField: e.target.value }, () => { console.log('Immediate results'); });
            }} 
            />*/
          }
          <SearchBuxa 
            placeholder='search monsters'
            handleChange={this.handleChange}
            joska={this.state.josika}
          />
          
          <CardList monsters={filteredMonsters} handleClick={this.handleClick} />
          { 
            /* this.state.monsters.map(
              (mnstre, i) => <h3 key={mnstre.id} id={"mnstre_" + i}>{mnstre.name} the MOFO. {i}</h3>
            )  */
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
