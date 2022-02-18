import { createStore, combineReducers } from "redux";
import dropdownReducer from "./reducers/dropdownReducer";

const reducers = combineReducers({
  dropdown: dropdownReducer,
});
const store = createStore(reducers);

export default store;
