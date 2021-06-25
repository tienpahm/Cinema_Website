import _ from "lodash";
import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovieList} from "../../redux/actions/MovieActions";
import HomeMenu from "./HomeMenu/HomeMenu";
import HomeCarousel from "../../template/HomeTempalte/Layout/HomeCarousel/HomeCarousel";
import HomeMovieList from "./HomeMovieList/HomeMovieList";
import Slider from "react-slick";
import "./Home.css";

import {
  RESET_MOVIE_DETAIL,
  SET_COMING_SOON_MOVIE,
  SET_SHOWING_MOVIE,
} from "../../redux/types/MovieManagementTypes";
import {RESET_CINEMA_DETAIL} from "../../redux/types/CinemaTypes";
import {Link} from "react-router-dom";
import {history} from "../../App";
export default function Home(props) {
  const dispatch = useDispatch();
  const {arrMovie} = useSelector((state) => state.MovieReducer);
  const [buttonStateShowing, setButtonStateShowing] = useState(false);
  const [buttonStateComing, setButtonStateComing] = useState(false);
  useEffect(() => {
    localStorage.setItem("selected_cinema", "");
    dispatch({type: RESET_MOVIE_DETAIL});
    dispatch({
      type: RESET_CINEMA_DETAIL,
    });
  }, []);
  return (
    <div>
      <HomeCarousel />

      <section className="text-gray-600 body-font home my-10 lg:my-14">
        <div className="w-full px-5 py-10 lg:py-24 ">
          <div className="text-center">
            <button
              class={`lg:text-3xl text-2xl px-8 lg:py-4 py-3 mr-5 mb-5 font-semibold border rounded ${
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
              class={`lg:text-3xl text-2xl px-8 lg:py-4 py-3 mr-5 mb-5 font-semibold border rounded ${
                buttonStateComing ? "active_status" : "haha"
              }`}
              onClick={() => {
                dispatch({type: SET_COMING_SOON_MOVIE});
                setButtonStateComing(!buttonStateComing);
                setButtonStateShowing(false);
              }}>
              COMING SOON
            </button>
          </div>
          <HomeMovieList />
        </div>
      </section>
      <div className="mx-10">{/* <HomeMenu /> */}</div>
    </div>
  );
}
