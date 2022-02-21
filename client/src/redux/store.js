import { createStore, combineReducers, applyMiddleware } from "redux";
import dropdownReducer from "./reducers/dropdownReducer";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { loggedInUser } from "./actions/authActions";

const reducers = combineReducers({
  dropdown: dropdownReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(loggedInUser());

export default store;
