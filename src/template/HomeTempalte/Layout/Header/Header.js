import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import FormLogin from "../../../../component'/Form/FormLogin";
import FormJoin from "../../../../component'/Form/FormJoin";
import {useDispatch, useSelector} from "react-redux";
import {TOGGLE_HEADER} from "../../../../redux/types/ToggleTypes";
import {LOG_OUT_CURRENT_USER} from "../../../../redux/types/UserTypes";
import {
  getCinemaInfo,
  getShowtimebyCine,
} from "../../../../redux/actions/CinemaAction";
import _ from "lodash";
import {history} from "../../../../App";
import {SELECTED_CINE} from "../../../../redux/types/CinemaTypes";
import {message} from "antd";
import {TOKEN, USER} from "../../../../util/settings/config";
import {getUserProfile} from "../../../../redux/actions/UserAction";

export default function Header(props) {
  useEffect(() => {
    dispatch(getCinemaInfo());
  }, []);
  const dispatch = useDispatch();
  const {toggle} = useSelector((state) => state.ToggleContenReducer);
  const {arrCinema, selectedCinema} = useSelector(
    (state) => state.CinemaReducer
  );

  const {currentUser} = useSelector((state) => state.UserReducer);
  const loginUser = JSON.parse(localStorage.getItem(USER));

  // const [toggle, setToggle] = useState(false);
  const [toggleLogin, setToggleLogin] = useState(false);

  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-gray-900 bg-opacity-50 fixed w-full text-white z-10 cinema-header">
      <div className="container flex justify-between h-20 mx-auto">
        <img
          src={require("../../../../assets/img/eventlogo.webp").default}
          alt="logo"
          onClick={() => {
            history.push("/");
          }}
          className="cursor-pointer"
        />
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {/* <button className="self-center px-8 py-3 rounded">Sign in</button>
          <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">
            Sign up
          </button> */}
          <div className="flex justify-items-center cinema-nav-options">
            <select
              className="cinema-options"
              value={localStorage.getItem("selected_cinema")}
              onChange={(event) => {
                let index = event.target.options["selectedIndex"];

                dispatch({
                  type: SELECTED_CINE,
                  payload: event.target.options[index].value,
                });
              }}>
              <option value="" disabled selected hidden>
                Select Cinema
              </option>
              {arrCinema?.map((item, index) => {
                return (
                  <option key={index} value={item.maHeThongRap}>
                    {item.tenHeThongRap}
                  </option>
                );
              })}
            </select>
            <div className="cinema-header-time-ticket">
              <Link
                to={`/cinemashows/${selectedCinema}`}
                onClick={() => {
                  dispatch(getShowtimebyCine(selectedCinema));
                }}>
                <span style={{color: "white"}}>
                  Times & Tickets <i className="ml-2 fa fa-ticket-alt"></i>
                </span>
              </Link>
            </div>
            {currentUser ? (
              <div className=" cinema-header-member flex items-center justify-between">
                <div>
                  <div className="cinema-header-member-welcome-member text-xl">
                    Welcome <span>{currentUser?.taiKhoan}</span>
                  </div>
                  <div className="flex justify-around ">
                    <div
                      className="text-sm cursor-pointer"
                      onClick={() => {
                        dispatch(getUserProfile());
                        props.history.push("/userProfile");
                      }}>
                      account
                    </div>
                    <div
                      className="text-sm cursor-pointer"
                      onClick={() => {
                        dispatch({
                          type: LOG_OUT_CURRENT_USER,
                        });
                      }}>
                      log out
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" cinema-header-member flex items-center justify-between">
                <div>
                  <span>Cine</span>Member
                </div>
                <div className={`icon-wrapper ${toggle ? "open" : ""}`}>
                  <div
                    onClick={() => {
                      dispatch({
                        type: TOGGLE_HEADER,
                      });
                    }}
                    className="h-full cursor-pointer">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </div>
                  <div className="login-container">
                    <div className="flex justify-between px-12 py-2 border-b">
                      <div
                        className={`login-nav ${!toggleLogin ? "active" : ""}`}
                        onClick={() => {
                          setToggleLogin(!toggleLogin);
                        }}>
                        Login
                      </div>
                      <div
                        className={`join-nav ${toggleLogin ? "active" : ""}`}
                        onClick={() => {
                          setToggleLogin(!toggleLogin);
                        }}>
                        Join
                      </div>
                    </div>
                    <div className="login-join-content">
                      <div
                        className={`login-content ${
                          toggleLogin ? "active" : ""
                        }`}>
                        <FormLogin />
                      </div>
                      <div
                        className={`join-content ${
                          !toggleLogin ? "active" : ""
                        }`}>
                        <FormJoin />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
