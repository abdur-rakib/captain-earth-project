import { SET_TASKS, CREATE_CURRENT_TASK } from "../types";

const initialState = {
  levels: null,
  actsOfLoveTask: [],
  goodWillTask: [],
  leadershipTask: [],
  currentTaskAnswer: {},
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
    // case SET_LEVELS:
    //   return {
    //     ...state,
    //     levels: action.payload,
    //   };
    default:
      return state;
  }
}
