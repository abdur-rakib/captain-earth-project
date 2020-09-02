import { SET_TASKS, SET_ANSWERS, SET_LIKES } from "../types";

const initialState = {
  answers: null,
  // NEW
  tasks: null,
  likes: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case SET_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };

    case SET_LIKES:
      return {
        ...state,
        likes: action.payload,
      };
    default:
      return state;
  }
}
