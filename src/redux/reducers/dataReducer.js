import {
  SET_TASKS,
  // CREATE_CURRENT_TASK,
  SET_ANSWERS,
  SET_LIKES,
  // SET_TASK,
} from "../types";

const initialState = {
  // levels: null,
  // categories: null,
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
    // case CREATE_CURRENT_TASK:
    //   return {
    //     ...state,
    //     currentTaskAnswer: action.payload,
    //   };
    case SET_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };
    // case SET_TASK:
    //   console.log("action.payload");
    //   return {
    //     ...state,
    //   };
    case SET_LIKES:
      return {
        ...state,
        likes: action.payload,
      };
    default:
      return state;
  }
}
