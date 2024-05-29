import { USER_STORE } from "../constants/appConstants";
import { LOGIN, LOGOUT, LoginAction, LogoutAction, User } from "../constants/types/redux.type";

export const handleLogin = (data: User): LoginAction => {
  localStorage.setItem(USER_STORE, JSON.stringify(data));
  return {
    type: LOGIN,
    payload: data,
  };
};

export const handleLogout = (): LogoutAction => {
  localStorage.setItem(USER_STORE, "{}");
  return {
    type: LOGOUT,
    payload: undefined,
  };
};
