import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Pasakron.js'; 
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Show,Counter} from './component';

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
      

      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><NavLink to="/counter" activeClassName="active">Counter</NavLink></li>
              <li><NavLink to="/show" activeClassName="active">show</NavLink></li>

            </ul>
          </div>
          <div >
            <Switch>
                <Route path="/counter" component={Counter} exact={true} />
                <Route path="/show" component={Show} />

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
