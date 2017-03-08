/**
 * Created by andrew on 3/8/17.
 */
import {EventEmitter} from "events"

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
    this.emit('change')
  }

  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore('default');
window.todoStore = todoStore;
// this allows to print in browser console
//todoStore.createTodo('sd');
export default todoStore;
