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

  constructor(props) {
    super(props);

    this.state = {
      string: 'HUJJ HUJJ',
      josika: 'pistika',
      monsters: [{id: 'njmn', name: 'uff'}],
      searchField: '',
      test2: true,
      test3: false,
      test4: this.props.nevem + 'ujj'
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
          
          <img src={logo} className="App-logo" alt="logo" width="100"/>
          <p>{'{' + this.state.string + '}'}</p>
          <button onClick={() => this.setState({ string: 'Jóska ' + (new Date()).getSeconds() })}>Klikk</button>
          <p style={{color: 'white'}}>{this.state.test2 ? 'true' : 'false'}</p>
          <button onClick={() => this.setState(state => ({ test2: !state.test2 }))}>Klikk 2</button>
          <button onClick={() => this.setState(state => { return {test2: !state.test2 }})}>Klikk 2v2</button>
          <p style={{color: 'white'}}>{this.state.test3 ? 'true' : 'false'}</p>
          <button onClick={() => this.setState((prevState, prevProps) => { console.log(prevState); console.log(prevProps); return {test3: !prevState.test3 }})}>Klikk 3</button>
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
      title: 'Monsters Rolodex'
    }
  }

  render() {
    return (<h1>{this.state.title}</h1>);
  }

}

// Functional component using export

export const Fica = props => (
  <h2>Itten</h2>
);

// Functional component (direct)

function Heye() {
  return (
    <h3>Ottan</h3>
  );
}

export default App;
