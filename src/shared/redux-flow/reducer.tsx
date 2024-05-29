import { USER_STORE } from "../constants/appConstants";
import { AuthActionTypes, LOGIN, LOGOUT, State, User } from "../constants/types/redux.type";

// Get initial user state from local storage
const storedUser = localStorage.getItem(USER_STORE);
const initialUser: User | undefined = storedUser ? JSON.parse(storedUser) : undefined;

// Initial state
const initState: State = {
  user: initialUser,
};

// Reducer
const rootReducer = (state = initState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default rootReducer;
