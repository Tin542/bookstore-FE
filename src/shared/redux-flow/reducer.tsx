import { USER_STORE } from "../constants/appConstants";
import { AuthActionTypes, LOGIN, LOGOUT, State } from "../constants/type";

// Initial state
const initState: State = {
  data: {
    user: JSON.stringify(localStorage.getItem(USER_STORE)) || undefined,
  },
};

// Reducer
const rootReducer = (state = initState, action: AuthActionTypes): State => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: {
          user: action.payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        data: {
          user: undefined,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
