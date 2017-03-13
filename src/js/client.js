import {applyMiddleware, combineReducers, createStore} from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk"

const initialState = {
  fetching: false,
  fetched: false,
  user: {},
  error: null
};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      state = {
        ...state,
        fetching: false,
        user: {...state.user, name: action.payload}
      };
      break;
    case "CHANGE_AGE":
      state = {
        ...state,
        fetching: false,
        user: {...state.user, age: action.payload}
      };
      break;
    case "USER_LOADING":
      state = {
        ...state,
        fetching: true
      };
      break;
    case "EEE":
      throw "EEE type";
  }
  return state;
};

const tweetReducer = function (state = [], action) {
  return state;
};


const myLogger = store => next => action => {
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


const middleware = applyMiddleware(thunk, logger(), error, myLogger);

const reducer = combineReducers(
  {user: userReducer, tweet: tweetReducer}
  );

const store = createStore(reducer, {}, middleware);
store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});

store.dispatch(dispatch => {
  store.dispatch({type: "USER_LOADING"});
  setTimeout(() => { //
    store.dispatch({type: "CHANGE_AGE", payload: 36});
  }, 3000);
});