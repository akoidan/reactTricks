/**
 * Created by andrew on 3/15/17.
 */
import  {applyMiddleware, createStore} from "redux"

import logger from "redux-logger"
import  thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "./reducers"


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


const middleware = applyMiddleware(promise(), thunk, logger(), error, myLogger)
export default createStore(reducer, middleware)
