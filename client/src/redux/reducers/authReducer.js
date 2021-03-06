import {
  RESET_USER,
  SET_LOADING,
  SET_LOGIN_ERROR,
  SET_USER,
} from "../actions/authActions";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const selectUser = (state) => state.auth.user;
export const selectUserFullName = (state) =>
  `${state.auth.user?.firstName} ${state.auth.user?.lastName}`;
export const selectIsError = (state) => state.auth.isError;
export const selectIsSuccess = (state) => state.auth.isSuccess;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectAuthMessage = (state) => state.auth.message;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...initialState,
        isLoading: true,
        message: "Loading...",
      };
    case SET_USER:
      return {
        ...initialState,
        user: action.payload,
        isSuccess: true,
        message: "Logged in ",
      };
    case SET_LOGIN_ERROR:
      return {
        ...initialState,
        isError: true,
        message: "Wrong username or password",
      };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
