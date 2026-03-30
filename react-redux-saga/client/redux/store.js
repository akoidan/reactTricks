import {createStore, applyMiddleware} from "redux";
import reducers from './reducers';
import createSageMiddleware from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleware = createSageMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

store.subscribe(() => {
  console.log("store changed", store.getState());
});


store.dispatch({type: "INC", payload: 1});
sagaMiddleware.run(rootSaga);
export default store;