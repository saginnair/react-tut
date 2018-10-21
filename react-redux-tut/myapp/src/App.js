import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja'
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  state = {
    ninjas : [
      {name:'Test', age:'10', belt:'yellow',id:1},
      {name:'Test1', age:'20', belt:'red',id:2},
      {name:'Test2', age:'30', belt:'blue',id:3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas:ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1> My first React App </h1>
        <p> Welcome :) </p>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
