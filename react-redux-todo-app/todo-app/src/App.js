import React, { Component } from 'react';
import Todos from "./todos";
import AddTodo from './AddTodo'

class App extends Component {

  state = {
    todos : [
      {id:1, content:"Buy some milk"},
      {id:2, content:"Play Mario Kart"}
    ]
  }

  deleteTodo = (id) => {
    //console.log(id)
    const todos_new = this.state.todos.filter(
      todo => {
        return todo.id !== id
      }
    );
    this.setState({
      todos:todos_new
    })
  }

  addTodo = (content) => {
    const new_todos = {
      id:Math.random,
      content:content
    }
    const new_todos_list = [...this.state.todos, new_todos];
    this.setState(
      {
        todos: new_todos_list
      }
    )
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
