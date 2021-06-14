import {SET_CAROUSEL, SET_MOVIE_LIST} from "../types/CarouselTypes";

const initialState = {
  arrBanner: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
};

export const CarouselReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CAROUSEL: {
      return {...state, arrBanner: payload};
    }

    default:
      return {...state};
  }
};
