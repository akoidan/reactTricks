import {combineReducers} from "redux";
import posts from './posts';
import i from './i';
const reducers = combineReducers({i, posts});
export default reducers;