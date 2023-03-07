import * as Redux from 'redux';
import userReducer from "./reducers/userReducers";
import todoReducer from './reducers/todoReducer'
const store1 = Redux.combineReducers({
  userReducer,
  todoReducer
})

const store = Redux.legacy_createStore(store1)
export default store
