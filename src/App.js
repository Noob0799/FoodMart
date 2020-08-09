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
            <Route exact path="/" component={Main} />
            <Route exact path="/food/:id" component={Item} />
          </Fragment>
        </Router>
      </div>
    );
  }
}
