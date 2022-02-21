import { createStore, combineReducers, applyMiddleware } from "redux";
import dropdownReducer from "./reducers/dropdownReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  dropdown: dropdownReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
