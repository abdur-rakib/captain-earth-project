import { SET_ERRORS, CLEAR_ERRORS } from "../types";

const initialState = {
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  // console.log(state);
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
