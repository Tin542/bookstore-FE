/* eslint-disable @typescript-eslint/no-explicit-any */
export const LOGIN = 'auth/login';
export const LOGOUT = 'auth/logout';
export const UPDATE_PROFILE = 'auth/updateProfile';

// Define the base action type
interface UnknownAction {
  type: string;
  [key: string]: any; // Index signature
}

// State type
export type User = {
  id: number;
  name: string;
  username: string;
}

export interface State {
  user: string | User | undefined;
}


//Actions Type
export interface LoginAction extends UnknownAction {
  type: typeof LOGIN;
  payload: User;
}

export interface LogoutAction {
  type: string;
  payload: undefined; // Assuming no payload for logout
}

export type AuthActionTypes = LoginAction | LogoutAction ;
