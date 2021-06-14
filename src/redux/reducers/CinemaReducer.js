import {GET_CINEMA_INFO, GET_CINEMA_SHOW_TIME} from "../types/CinemaTypes";

const defaultState = {
  arrCinema: null,
  arrCinemaShowTime: null,
};

export const CinemaReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case GET_CINEMA_INFO: {
      return {...state, arrCinema: payload};
    }
    case GET_CINEMA_SHOW_TIME: {
      return {...state, arrCinemaShowTime: payload};
    }
    default:
      return {...state};
  }
};
