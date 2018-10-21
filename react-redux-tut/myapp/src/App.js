import React, { Component } from 'react';
import Ninjas from './ninjas';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> My first React App </h1>
        <p> Welcome :) </p>
        <Ninjas name="Test" age="25" belt="black"/>
      </div>
    );
  }
}

export default App;
