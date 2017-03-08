import React, {Component} from "react";
import "../App.css";
import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";

export default class Flux extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: TodoStore.getAll()
    }
  }

  // fires only the first time component adds to the dom (once)
  // inherited from Component
  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({todos: TodoStore.getAll()})
    });
  }

  changeName(name) {
    this.setState({name});
  }

  render() {
    const {todos} = this.state;
    let todosRendered = todos.map(e => <Todo todo={e}/>);
    return (<div>
      <h1>Here goes todo list</h1>
      <ul>{todosRendered}</ul>
    </div>);
  }

}