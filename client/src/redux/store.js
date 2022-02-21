import { createStore, combineReducers, applyMiddleware } from "redux";
import dropdownReducer from "./reducers/dropdownReducer";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

const reducers = combineReducers({
  dropdown: dropdownReducer,
  auth: authReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
