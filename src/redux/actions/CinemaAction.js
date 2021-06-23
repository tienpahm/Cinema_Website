import {message} from "antd";
import {cinemaServices} from "../../services/CinemaServices";
import {STATUS} from "../../util/settings/config";
import {
  GET_CINEMA_DETAIL,
  GET_CINEMA_INFO,
  GET_CINEMA_SHOW_TIME,
  SHOW_TIMES_BY_CINEMA,
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
export const bookingTicket = (ticketContent) => {
  return async (dispatch) => {
    try {
      const {data, status} = await cinemaServices.bookingTicket(
        ticketContent.ticket
      );
      if (status === STATUS.SUCCESS) {
        message.success("Successfully booking ticket");
        dispatch(getCinemaDetail(ticketContent.sessionId));
      }
    } catch (error) {
      message.error("Please login before booking ticket");
    }
  };
};
export const getShowtimebyCine = (cineId) => {
  return async (dispatch) => {
    try {
      const {data, status} = await cinemaServices.getShowtimeByCine(cineId);
      console.log(data);
      if (status === STATUS.SUCCESS) {
        dispatch({
          type: SHOW_TIMES_BY_CINEMA,
          payload: data.content,
        });
      }
    } catch (error) {
      // message.error("Please login before booking ticket");
    }
  };
};
