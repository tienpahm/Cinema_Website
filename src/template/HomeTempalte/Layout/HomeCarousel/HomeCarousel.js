import React, {useEffect} from "react";
import {Carousel} from "antd";
import {useDispatch, useSelector} from "react-redux";

import * as _ from "lodash";
import "./HomeCarousel.css";
import {getCarouselAction} from "../../../../redux/actions/CarouselAction";

export default function HomeCarousel(props) {
  const {arrBanner} = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const renderBannerCarousel = () => {
    return _.map(arrBanner, (item, index) => {
      return (
        <div key={index}>
          <div
            className="carousel-banner"
            style={{
              height: "600px",
              // background: `#000 url(${item.hinhAnh}) no-repeat center`,
              backgroundImage: `url(${item.hinhAnh})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
        </div>
      );
    });
  };
  return (
    <Carousel effect="fade" style={{zIndex: 0}}>
      {renderBannerCarousel()}
    </Carousel>
  );
}
