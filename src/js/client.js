import {applyMiddleware, combineReducers, createStore} from "redux"

const userReducer = function (state = {}, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {...state, name: action.payload};
      break;
    case "CHANGE_AGE":
      state = {...state, age: action.payload};
      break;
    case "EEE":
      throw "EEE type";
  }
  return state;
};

const tweetReducer = function (state = [], action) {
  return state;
};


const logger = store => next => action => {
  console.log("Action fired", action);
  //action.type = "CHANGE_NAME";
  next(action);
};

const error = store => next => action => {
  try {
    next(action)
  } catch (e) {
    console.error("AAAHHH", e);
  }
};


const middleware = applyMiddleware(logger, error);

const reducer = combineReducers(
  {user: userReducer, tweet: tweetReducer}
  );

const store = createStore(reducer, {}, middleware);
store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 36});
store.dispatch({type: "EEE", payload: 36});