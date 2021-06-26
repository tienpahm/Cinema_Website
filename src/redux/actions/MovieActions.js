import {quanLyPhimService} from "../../services/QuanLiPhimService";
import {GET_MOVIE_DETAIL, SET_MOVIE_LIST} from "../types/MovieManagementTypes";

export const getMovieList = (param) => {
  return async (dispatch) => {
    try {
      const res = await quanLyPhimService.getMovieList();
      console.log(res);
      dispatch({
        type: SET_MOVIE_LIST,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getMovieDetail = (id) => {
  return async (dispatch) => {
    try {
      const res = await quanLyPhimService.getMovieDetail(id);
      console.log(res);
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
