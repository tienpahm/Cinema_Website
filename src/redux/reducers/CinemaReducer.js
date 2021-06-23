import {
  GET_CINEMA_DETAIL,
  GET_CINEMA_INFO,
  GET_CINEMA_SHOW_TIME,
  RESET_CINEMA_DETAIL,
  SELECTED_CINE,
  SHOW_TIMES_BY_CINEMA,
} from "../types/CinemaTypes";

const defaultState = {
  arrCinema: null,
  arrCinemaShowTime: null,
  cinemaDetail: undefined,
  selectedCinema: "",
  showTimeByCinema: null,
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
    // case "SET_SEAT_STATUS": {
    //   let index = state.cinemaDetail.danhSachGhe.findIndex(
    //     (item) => item.maGhe === payload
    //   );
    //   let cinemaDetailClone = {...state.cinemaDetail};
    //   if (index !== -1) {
    //     cinemaDetailClone.danhSachGhe[index].daDat =
    //       !cinemaDetailClone.danhSachGhe[index].daDat;
    //   }

    //   return {...state};
    // }

    case SELECTED_CINE: {
      localStorage.setItem("selected_cinema", payload);
      return {...state, selectedCinema: payload};
    }
    case SHOW_TIMES_BY_CINEMA: {
      return {...state, showTimeByCinema: payload};
    }
    case RESET_CINEMA_DETAIL: {
      return {...state, cinemaDetail: undefined};
    }
    default:
      return {...state};
  }
};
