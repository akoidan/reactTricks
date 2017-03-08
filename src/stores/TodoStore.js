/**
 * Created by andrew on 3/8/17.
 */
import {EventEmitter} from "events";
import dispatcher from "../dispatcher";


class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {id: 1, text: 'Get Laptop', completed: false},
      {id: 2, text: 'Get chess', completed: false},
      {id: 3, text: 'Get cream', completed: true},
    ]
  }

  print() {
    console.log(this.name);
  }

  createTodo(text) {
    const id = Date.now();
    this.todos.push({
      id, text, completed: false
    });
    this.emit('change');
  }

  receivedTodos (todos){
    this.todos = todos;
    this.emit('change');
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVED_TODOS": {
        this.receivedTodos(action.data);
      }
    }
  }
}

const todoStore = new TodoStore('default');
window.todoStore = todoStore; //TODO
// this allows to print in browser console
//todoStore.createTodo('sd');
// dispatcher.dispatch({type: "CREATE_TODO", text: "NEW TODO"});
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
