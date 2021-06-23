import {TOKEN, USER} from "../../util/settings/config";
import {
  SET_CURRENT_USER,
  LOG_OUT_CURRENT_USER,
  SET_USER_PROFILE,
} from "../types/UserTypes";
const stateDefault = {
  currentUser: undefined,
  userProfile: undefined,
};

export const UserReducer = (state = stateDefault, {type, payload}) => {
  switch (type) {
    case SET_CURRENT_USER: {
      return {...state, currentUser: payload};
    }
    case LOG_OUT_CURRENT_USER: {
      return {...state, currentUser: undefined};
    }
    case SET_USER_PROFILE: {
      return {...state, userProfile: payload};
    }

    default:
      return {...state};
  }
};
