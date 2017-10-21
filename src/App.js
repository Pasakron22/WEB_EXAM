import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Pasakronnn.js'; 
class App extends Component {
  constructor() {
    super();
    this.age = "200"
  }
  getVal = () => {
    return "Function getVal";
  }
  render() {
    const myname = "Pasakron";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Header />
        </p>
      </div>

    );
  }
}

export default App;
