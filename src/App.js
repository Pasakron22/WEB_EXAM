import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Pasakronnn.js';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'; 
import routes from './routing-config';


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
    const dUrl = "https://mysafeinfo.com/api/data?list=presidents&format=json";
    console.log(dUrl);
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
      <BrowserRouter>
        <div>
          <h1 className="left" >WEB_EXAM</h1>
          <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/president" >president</NavLink></li>
          </ul>
          
            {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}  
         
          
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
