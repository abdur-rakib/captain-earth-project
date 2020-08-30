import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_LOGOUT,
} from "../types";

const initialState = {
  authenticated: false,
  credentials: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        ...state,
        credentials: action.payload,
      };
    case SET_LOGOUT:
      return initialState;

    default:
      return state;
  }
}
