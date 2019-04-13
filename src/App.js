import React, { Component } from 'react';
import Home from './Home';
import History from './History';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLink
            to="/"
            style={{padding: "12px"}}
            activeStyle={{fontWeight: "bold", color: "red", padding: "12px"}}
          >Home
          </NavLink>
          <NavLink
            to="/notre-histoire"
            style={{padding: "12px"}}
            activeStyle={{fontWeight: "bold", color: "red", padding: "12px"}}
          >History
          </NavLink>

          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History}/>
        </div>
      </Router>
    );
  }
}

export default App;
