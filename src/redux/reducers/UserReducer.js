import {SET_CURRENT_USER, LOG_OUT_CURRENT_USER} from "../types/UserTypes";
const stateDefault = {
  currentUser: undefined,
};

export const UserReducer = (state = stateDefault, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_USER: {
      return {...state, currentUser: payload};
    }
    case LOG_OUT_CURRENT_USER: {
      return {...state, currentUser: undefined};
    }
    default:
      return {...state};
  }
};
