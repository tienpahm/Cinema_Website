import {quanLyPhimService} from "../../services/QuanLiPhimService";
import {SET_MOVIE_LIST} from "../types/MovieManagementTypes";

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
