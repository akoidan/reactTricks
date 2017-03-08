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

  getAll() {
    return this.todos;
  }
}

const todoStore = new TodoStore('default');

export default todoStore;
