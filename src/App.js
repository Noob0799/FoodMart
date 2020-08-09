import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Components/Body/Main/Main';
import Item from './Components/Body/Item/Item';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/Noob0799" component={Main} />
            <Route exact path="/Noob0799/food/:id" component={Item} />
          </Fragment>
        </Router>
      </div>
    );
  }
}
