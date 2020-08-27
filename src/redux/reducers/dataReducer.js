import { SET_TASKS, CREATE_CURRENT_TASK, SET_ANSWERS } from "../types";

const initialState = {
  levels: null,
  actsOfLoveTask: [],
  goodWillTask: [],
  leadershipTask: [],
  currentTaskAnswer: {},
  answers: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_CURRENT_TASK:
      return {
        ...state,
        currentTaskAnswer: action.payload,
      };
    case SET_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };
    default:
      return state;
  }
}
