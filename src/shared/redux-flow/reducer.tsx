import { USER_STORE } from "../constants/appConstants";
import { AuthActionTypes, LOGIN, LOGOUT, State } from "../constants/types/redux.type";

// Initial state
const initState: State = {
  user: localStorage.getItem(USER_STORE) || undefined,
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
