import React, {Component} from "react";
import "../App.css";
import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions"
import {EventEmitter} from "events";

export default class Flux extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: TodoStore.getAll()
    }
    this.onStoreChangeBinded = this.onStoreChange.bind(this);
  }

  // fires only the first time component adds to the dom (once)
  // inherited from Component
  componentWillMount() {
    TodoStore.on("change", this.onStoreChangeBinded);
    console.log("TodoStore registered a new listener, total listener counts: ", EventEmitter.listenerCount(TodoStore, 'change'));
  }

  onStoreChange() {
    this.setState({todos: TodoStore.getAll()})
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.onStoreChangeBinded)
  }

  changeName(name) {
    this.setState({name});
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  render() {
    const {todos} = this.state;
    let todosRendered = todos.map(e => <Todo todo={e}/>);
    return (<div>
      <button className="btn btn-info" onClick={this.reloadTodos.bind(this)}>Reload</button>
      <h1>Here goes todo list</h1>
      <ul>{todosRendered}</ul>
    </div>);
  }

}