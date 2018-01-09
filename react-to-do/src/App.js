import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ul>
         <ToDo />
          <li>Trying to fix this checkpoint!</li>
          <li>Please!</li>
         <ToDo />
       </ul>
      </div>
    );
  }
}

export default App;
