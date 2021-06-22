import {cinemaServices} from "../../services/CinemaServices";
import {
  GET_CINEMA_DETAIL,
  GET_CINEMA_INFO,
  GET_CINEMA_SHOW_TIME,
} from "../types/CinemaTypes";

export const getCinemaInfo = (param) => {
  return async (dispatch) => {
    try {
      const res = await cinemaServices.getCinemaInfo();

      dispatch({
        type: GET_CINEMA_INFO,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCinemaShowTime = () => {
  return async (dispatch) => {
    try {
      const res = await cinemaServices.getCinemaShowTime();
      console.log(res);
      dispatch({
        type: GET_CINEMA_SHOW_TIME,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCinemaDetail = (id) => {
  return async (dispatch) => {
    try {
      const res = await cinemaServices.getCinemaDetail(id);
      console.log(res);
      dispatch({
        type: GET_CINEMA_DETAIL,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
