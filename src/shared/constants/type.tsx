export const LOGIN = 'auth/login';
export const LOGOUT = 'auth/logout';
export const UPDATE_PROFILE = 'auth/updateProfile';

// State type
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface State {
  data: {
    user: string | User | undefined;
  };
}

//Actions Type
export interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

export interface LogoutAction {
  type: typeof LOGOUT;
  payload: undefined; // Assuming no payload for logout
}

export type AuthActionTypes = LoginAction | LogoutAction ;
