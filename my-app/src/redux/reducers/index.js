import { combineReducers } from "redux"
import counter from "./counter"
import { HeaderReducer } from 'my-private-package'

export default combineReducers({
  counter,
  header: HeaderReducer
})
