/**
 * Created by andrew on 3/15/17.
 */

import {combineReducers} from "redux"
import tweets from "./tweetsReducer"
import user from "./userReducer"

export default combineReducers({
  tweets,
  user
})