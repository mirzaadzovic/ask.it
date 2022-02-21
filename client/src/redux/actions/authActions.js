import AuthService from "../../services/AuthService";

export const SET_LOADING = "SET_LOADING";
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const SET_USER = "SET_USER";
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const setLoginError = () => {
  return {
    type: SET_LOGIN_ERROR,
  };
};

export const RESET_USER = "RESET_USER";
export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};

export const login = (data) => {
  return async (dispatch) => {
    console.log(data);
    const { email, password } = data;
    dispatch(setLoading());

    const user = await AuthService.logIn(email, password).catch((err) => null);

    if (user) dispatch(setUser(user));
    else dispatch(setLoginError());
  };
};

export const loggedInUser = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    const user = await AuthService.getLoggedInUser().catch((err) => null);

    if (user) dispatch(setUser(user));
    else dispatch(resetUser());
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(setLoading);
    await AuthService.logOut().catch((err) => null);

    dispatch(resetUser());
  };
};
