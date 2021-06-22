import {
  GET_CINEMA_DETAIL,
  GET_CINEMA_INFO,
  GET_CINEMA_SHOW_TIME,
} from "../types/CinemaTypes";

const defaultState = {
  arrCinema: null,
  arrCinemaShowTime: null,
  cinemaDetail: undefined,
  selectedCinema: "",
};

export const CinemaReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case GET_CINEMA_INFO: {
      return {...state, arrCinema: payload};
    }
    case GET_CINEMA_SHOW_TIME: {
      return {...state, arrCinemaShowTime: payload};
    }
    case GET_CINEMA_DETAIL: {
      return {...state, cinemaDetail: payload};
    }
    case "SET_SEAT_STATUS": {
      let index = state.cinemaDetail.danhSachGhe.findIndex(
        (item) => item.maGhe === payload
      );
      let cinemaDetailClone = {...state.cinemaDetail};
      if (index !== -1) {
        cinemaDetailClone.danhSachGhe[index].daDat =
          !cinemaDetailClone.danhSachGhe[index].daDat;
      }

      return {...state};
    }

    case "SET_SELECTED_CINE": {
      return {...state, selectedCinema: payload};
    }
    default:
      return {...state};
  }
};
