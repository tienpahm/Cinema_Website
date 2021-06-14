import axios from "axios";
import {baseService} from "../../services/BaseService";
import {quanLyPhimService} from "../../services/QuanLiPhimService";
import {DOMAIN} from "../../util/settings/config";
import {SET_CAROUSEL} from "../types/CarouselTypes";

export const getCarouselAction = (param) => {
  //sử dụng tham số ở chỗ này
  return async (dispatch) => {
    try {
      const res = await quanLyPhimService.getMovieBanner();

      dispatch({
        type: SET_CAROUSEL,
        payload: res.data.content,
      });
    } catch (err) {
      console.log(err.response);
    }
  };
};
