/**
 * Created by andrew on 3/9/17.
 */
import dispatcher from "../dispatcher"
import axios from 'axios'

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  })
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  })
}

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVED_TODOS", data: [
          {id: 4, text: 'Haircut', completed: false},
          {id: 5, text: 'Pillow', completed: true},
      ]
    });
  }, 1000);
}