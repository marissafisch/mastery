import React, { Component } from 'react';
import router from './router.js';
import Header from './components/Header/Header';

export default class App extends Component {

  render() {
    return (
      <div>
        {router}
        <Header/>
      </div>
    );
  }
}