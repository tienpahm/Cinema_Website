import React, {useEffect} from "react";
import {Carousel} from "antd";
import {useDispatch, useSelector} from "react-redux";
import Slider from "react-slick";

import * as _ from "lodash";
import "./HomeCarousel.css";
import {getCarouselAction} from "../../../../redux/actions/CarouselAction";

export default function HomeCarousel(props) {
  const {arrBanner, arrHomeBanner} = useSelector(
    (state) => state.CarouselReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            position: "absolute",
            left: "45px",
            bottom: "50px",
          }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          boxShadow: "0px 0px 5px 1px black",
          borderRadius: "50%",
          marginRight: "10px",
          background: "#FFFFFF",
          opacity: "0.5",
          zIndex: 1,
        }}></div>
    ),
  };
  function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "50px",
          zIndex: "1",
          color: "gray",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{...style, display: "block", left: "50px", zIndex: "1"}}
        onClick={onClick}
      />
    );
  }
  const renderBannerCarousel = (props) => {
    return _.map(arrHomeBanner, (item, index) => {
      return (
        <div key={index}>
          <div
            className="carousel-banner"
            style={{
              height: "600px",
              // background: `#000 url(${item.hinhAnh}) no-repeat center`,
              backgroundImage: `url(${item.desktop})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
        </div>
      );
    });
  };

  return (
    <div className="home-carousel" style={{position: "relative"}}>
      <Slider {...settings}>{renderBannerCarousel()}</Slider>
    </div>
  );
}
