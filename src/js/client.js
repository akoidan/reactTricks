import {combineReducers, createStore} from "redux"



const reducer = function (state, action) {
  if (action.type === "INC") {
    return state + action.payload;
  } else if (action.type === "DEC") {
    return state - action.payload;
  } else {
    return state;
  }
};

const store = createStore(reducer, 0);
store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 3});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});