import {TOGGLE_HEADER} from "../types/ToggleTypes";

const stateDefault = {
  toggle: false,
};

export const ToggleContenReducer = (state = stateDefault, {type, payload}) => {
  switch (type) {
    case TOGGLE_HEADER: {
      state.toggle = !state.toggle;
      return {...state};
    }
    default:
      return {...state};
  }
};
