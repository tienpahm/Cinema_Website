import _ from "lodash";
import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovieList} from "../../redux/actions/MovieActions";
import HomeMenu from "./HomeMenu/HomeMenu";
import FilmFlipCard from "../../component'/FilmFlipCard";
import Slider from "react-slick";
import "./Home.css";
import {
  SET_COMING_SOON_MOVIE,
  SET_SHOWING_MOVIE,
} from "../../redux/types/MovieManagementTypes";
export default function Home() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const {arrMovie} = useSelector((state) => state.MovieReducer);
  const [buttonStateShowing, setButtonStateShowing] = useState(false);
  const [buttonStateComing, setButtonStateComing] = useState(false);

  const renderMovieList = () => {
    return _.map(arrMovie, (item, index) => {
      return (
        <div key={index}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="lg:h-full md:h-full px-5 py-3 w-full object-cover object-center"
                  src={item.hinhAnh}
                  alt="blog"
                  onError={(event) => {
                    // console.log(event.target.currentSrc);
                    event.target.src = "https://picsum.photos/200/200";
                  }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
          </div>

          {/* <img
            className="lg:h-96 md:h-36 px-5 py-3 w-full object-cover object-center"
            src={item.hinhAnh}
            alt="blog"
            onError={(event) => {
              // console.log(event.target.currentSrc);
              event.target.src = "https://picsum.photos/200/200";
            }}
          /> */}

          <div className="ml-5">
            <p>{item.tenPhim}</p>
            <button className="bg-purple-400 w-full">BUY TICKET</button>
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
          background: "transparent",
          color: "red",
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
        style={{...style, display: "block", background: "transparent"}}
        onClick={onClick}
      />
    );
  }
  console.log(arrMovie);
  return (
    <div>
      <section className="text-gray-600 body-font home">
        <div className="w-3/5 px-5 py-24 mx-auto">
          <button
            class={`px-8 py-3 mr-5 mb-5 font-semibold border rounded ${
              buttonStateShowing ? "active_status" : "haha"
            }`}
            onClick={(e) => {
              setButtonStateShowing(!buttonStateShowing);
              setButtonStateComing(false);
              dispatch({type: SET_SHOWING_MOVIE});
            }}>
            SHOWING
          </button>
          <button
            class={`px-8 py-3 mr-5 mb-5 font-semibold border rounded ${
              buttonStateComing ? "active_status" : "haha"
            }`}
            onClick={() => {
              dispatch({type: SET_COMING_SOON_MOVIE});
              setButtonStateComing(!buttonStateComing);
              setButtonStateShowing(false);
            }}>
            COMING SOON
          </button>
          {arrMovie ? (
            <Slider {...settings}>{renderMovieList()}</Slider>
          ) : (
            <div>
              <img
                src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                alt=""
              />
            </div>
          )}
        </div>
      </section>
      <div className="mx-10">
        <HomeMenu />
      </div>
    </div>
  );
}
