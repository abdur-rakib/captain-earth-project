import { SET_TASKS } from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
