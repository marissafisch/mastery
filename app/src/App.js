import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from './router';
import Header from './components/Header/Header';
import './App.css';


class App extends Component {

  render(){
    return(

  <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div id="app-nav">
          <Link to="/">Home</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/functional_view">Functional View</Link>
          <Link to="/list">List</Link>
        </div>
        {router}
      </div>
    );
  }
}

export default App;
