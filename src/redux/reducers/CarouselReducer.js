import {SET_CAROUSEL, SET_MOVIE_LIST} from "../types/CarouselTypes";

const initialState = {
  arrBanner: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
  arrHomeBanner: [
    {
      desktop:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1445/banner.jpg",
      mobile:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1445/mobilebanner.jpg",
    },
    {
      desktop:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1447/banner.jpg",
      mobile:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1447/mobilebanner.jpg",
    },
    {
      desktop:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1455/banner.jpg",
      mobile:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1455/mobilebanner.jpg",
    },
    {
      desktop:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1276/banner.jpg",
      mobile:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1276/mobilebanner.jpg",
    },
    {
      desktop:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1458/banner.jpg",
      mobile:
        "https://cdn.eventcinemas.com.au/cdn/resources/home/banners/1458/mobilebanner.jpg",
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
