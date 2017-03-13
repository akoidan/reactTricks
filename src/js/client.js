import {combineReducers, createStore} from "redux"

const userReducer = function (state = {}, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {...state, name: action.payload};
      break;
    case "CHANGE_AGE":
      state = {...state, age: action.payload};
      break;
  }
  return state;
};

const tweetReducer = function (state = [], action) {
  return state;
};


const reducer = combineReducers(
  {user: userReducer, tweet: tweetReducer}
  );

const store = createStore(reducer);
store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});