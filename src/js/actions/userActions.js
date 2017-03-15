/**
 * Created by andrew on 3/15/17.
 */
export function fecthUser() {
  return function(dispatch) {
      dispatch({
        type: "CHANGE_NAME", payload: "Andrew"})
  }
}