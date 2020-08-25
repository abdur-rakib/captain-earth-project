import { SET_TASKS, CREATE_CURRENT_TASK } from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...action.payload,
      };
    case CREATE_CURRENT_TASK:
      return {
        ...state,
        currentTaskAnswer: action.payload,
      };
    default:
      return state;
  }
}
