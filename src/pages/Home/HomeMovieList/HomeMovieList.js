import _ from "lodash";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {history} from "../../../App";
import {getMovieList} from "../../../redux/actions/MovieActions";
import Slider from "react-slick";
export default function HomeMovieList() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const {arrMovie} = useSelector((state) => state.MovieReducer);
  const renderMovieList = () => {
    return _.map(arrMovie, (item, index) => {
      return (
        <div key={index} className="px-3 py-3">
          <div>
            <img
              className="lg:h-80 md:h-72 h-96  w-full object-cover object-center"
              src={item.hinhAnh}
              alt="blog"
              onError={(event) => {
                event.target.src = "https://picsum.photos/200/200";
              }}
            />

            <div className="movie-list-items">
              <p
                className="h-14 mt-2 font-semibold text-center text-lg"
                style={{color: "black"}}>
                {item.tenPhim}
              </p>
              <button
                className="bg-purple-400 w-full"
                onClick={() => {
                  history.push(`/detail/${item.maPhim}`);
                }}>
                <div className="cinema-header-time-ticket">
                  <span
                    className="text-white text-lg"
                    style={{padding: "0.5rem 0.75rem"}}>
                    Times & Tickets <i className="fa fa-ticket-alt"></i>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "20px",
          zIndex: "1",
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
        style={{...style, display: "block", left: "0px", zIndex: "1"}}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      {arrMovie ? (
        <Slider {...settings}>{renderMovieList()}</Slider>
      ) : (
        <div className="loading">
          <img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
}
