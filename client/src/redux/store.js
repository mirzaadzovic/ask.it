import { createStore, combineReducers, applyMiddleware } from "redux";
import dropdownReducer from "./reducers/dropdownReducer";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { loggedInUser } from "./actions/authActions";
import questionsReducer from "./reducers/questionsReducer";

const reducers = combineReducers({
  dropdown: dropdownReducer,
  auth: authReducer,
  questions: questionsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(loggedInUser());

export default store;
