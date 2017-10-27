import React, { Component } from 'react';
import Header from './components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home/Home';
import Workouts from './components/Workouts/Workouts';

export default class App extends Component {

  render() {
    return (
      <div>
        <Switch>
        <Route exact path ="/" component={Home} />
        <Route path ="/header" component={Header} />
        <Route path='/workouts' component={Workouts} />
    </Switch>
    <Header/>
      </div>
    );
  }
}