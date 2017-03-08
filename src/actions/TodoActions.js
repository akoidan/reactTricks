/**
 * Created by andrew on 3/9/17.
 */
import dispatcher from "../dispatcher"

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