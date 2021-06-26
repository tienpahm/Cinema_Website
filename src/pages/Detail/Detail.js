import _ from "lodash";
import React, {Fragment, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetail} from "../../redux/actions/MovieActions";
import {Tabs, Modal} from "antd";
import "./Detail.css";
import {getCinemaInfo} from "../../redux/actions/CinemaAction";
import {Rate} from "antd";
import {RESET_CINEMA_DETAIL} from "../../redux/types/CinemaTypes";

export default function Detail(props) {
  const dispatch = useDispatch();
  const {movieDetail} = useSelector((state) => state.MovieReducer);
  const {arrCinema} = useSelector((state) => state.CinemaReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    dispatch(getMovieDetail(props.match.params.id));
    dispatch(getCinemaInfo());
    dispatch({
      type: RESET_CINEMA_DETAIL,
    });
  }, []);
  const {TabPane} = Tabs;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderLichChieuMovie = (item) => {
    let tempArr = [];
    let tempContent = [];
    if (movieDetail) {
      _.map(movieDetail.lichChieu, (time, index) => {
        if (time.thongTinRap.maHeThongRap === item.maHeThongRap) {
          tempArr.push(time.thongTinRap.tenCumRap);
          tempContent.push(time);
        }
      });

      return (
        <div>
          <p className="text-center font-semibold md:text-xl text-lg mx-5">
            {_.uniq(tempArr)[0]}
          </p>
          <div className="flex justify-center flex-wrap">
            {tempContent.length !== 0 ? (
              _.map(tempContent.slice(0, 10), (item, index) => {
                return (
                  <div
                    key={index}
                    className="mr-5 md:py-3 md:px-5 py-2 px-3 bg-gray-200 md:w-72 w-52 cursor-pointer border-red-600 mb-5 "
                    style={{borderLeftWidth: "20px"}}
                    onClick={() => {
                      props.history.push(`cinemaDetail/${item.maLichChieu}`);
                    }}>
                    <div className="flex justify-between">
                      <span>Original </span>
                      <span
                        className="bg-red-600 p-1 text-sm text-white"
                        style={{transform: "translate(20px, -10px)"}}>
                        SAVER
                      </span>
                    </div>
                    <div className="md:text-2xl text-xl">
                      {item.ngayChieuGioChieu.slice(
                        11,
                        item.ngayChieuGioChieu.length - 3
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <span>NO SESSION AVAILABLE</span>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <img
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt=""
        />
      );
    }
  };

  return (
    <Fragment>
      {movieDetail ? (
        <div className="movie-detail">
          <Modal
            title={_.replace(movieDetail.biDanh, "-", " ").toUpperCase()}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}>
            <iframe
              className="w-full"
              height="315"
              src={movieDetail.trailer}
              title={_.replace(
                movieDetail.biDanh,
                "-",
                " "
              ).toUpperCase()}></iframe>
          </Modal>
          <div
            className="movie-description p-5 flex"
            style={{backgroundColor: "#252728"}}>
            <div className="mr-12">
              <img
                src={movieDetail.hinhAnh}
                alt="banner"
                style={{minWidth: "214px", height: "318px"}}
              />
              <div
                className="bg-blue-500 text-white text-center py-2 cursor-pointer"
                onClick={showModal}>
                <span>
                  View trailer <i className="ml-2 fa fa-play"></i>
                </span>
              </div>
            </div>
            <div
              style={{color: "white"}}
              className="flex flex-col justify-between">
              <div className="flex">
                <p className="md:text-2xl text-xl font-bold mb-0">
                  {_.replace(movieDetail.biDanh, "-", " ").toUpperCase()}
                </p>
                <span
                  className="md:text-xl text-md ml-5 bg-yellow-200 p-1 border rounded-sm"
                  style={{height: "fit-content", color: "black"}}>
                  PG
                </span>
              </div>
              <div className="md:text-xl text-lg hidden sm:block">
                {movieDetail.moTa}
              </div>
              <div className="md:text-xl text-lg">
                <div>
                  <span className="w-36 inline-block">ReaLse Date :</span>{" "}
                  {new Date(movieDetail.ngayKhoiChieu).toLocaleDateString(
                    "en-gb"
                  )}
                </div>
                <div>
                  <span className="w-36 inline-block">Running Time :</span> N/A
                </div>
                <div>
                  <span className="w-36 inline-block">Director : </span> N/A
                </div>
                <div>
                  <span className="w-36 inline-block">Cast :</span> N/A
                </div>
              </div>
              <div>
                <Rate allowHalf defaultValue={movieDetail.danhGia} />
              </div>
            </div>
          </div>
          <div className="my-24" style={{minHeight: "300px"}}>
            <Tabs tabPosition="top">
              {_.map(arrCinema, (item, index) => {
                return (
                  <TabPane
                    tab={
                      <img
                        src={item.logo}
                        alt=""
                        className="rounded-full md:w-20 md:h-20 w-14 h-14"
                      />
                    }
                    key={index}>
                    {renderLichChieuMovie(item)}
                  </TabPane>
                );
              })}
            </Tabs>
          </div>
        </div>
      ) : (
        <div className="loading">
          <img
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            alt=""
          />
        </div>
      )}
    </Fragment>
  );
}
