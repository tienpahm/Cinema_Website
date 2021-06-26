import {
  GET_MOVIE_DETAIL,
  RESET_MOVIE_DETAIL,
  SET_COMING_SOON_MOVIE,
  SET_MOVIE_LIST,
  SET_SHOWING_MOVIE,
} from "../types/MovieManagementTypes";

const defaultState = {
  arrMovie: null,
  arrMovieOrigin: null,
  showingStatus: false,
  comingSoonStatus: false,
  movieDetail: null,
};

export const MovieReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case SET_MOVIE_LIST: {
      return {...state, arrMovie: payload, arrMovieOrigin: payload};
    }

    case SET_SHOWING_MOVIE: {
      state.showingStatus = !state.showingStatus;
      state.comingSoonStatus = false;

      if (state.showingStatus) {
        state.arrMovie = state.arrMovieOrigin.filter((item) => {
          return item.dangChieu && !item.sapChieu;
        });
      } else {
        state.arrMovie = state.arrMovieOrigin;
      }

      return {...state};
    }

    case SET_COMING_SOON_MOVIE: {
      state.comingSoonStatus = !state.comingSoonStatus;
      state.showingStatus = false;

      if (state.comingSoonStatus) {
        state.arrMovie = state.arrMovieOrigin.filter((item) => {
          return item.sapChieu && !item.dangChieu;
        });
      } else {
        state.arrMovie = state.arrMovieOrigin;
      }

      return {...state};
    }

    case GET_MOVIE_DETAIL: {
      return {...state, movieDetail: payload};
    }
    case RESET_MOVIE_DETAIL: {
      return {...state, movieDetail: null};
    }
    default:
      return {...state};
  }
};
