import React, {useEffect, useState} from "react";
import {Tabs} from "antd";
import {useDispatch, useSelector} from "react-redux";

import {
  getCinemaInfo,
  getCinemaShowTime,
} from "../../../redux/actions/CinemaAction";
import _ from "lodash";

export default function HomeMenu() {
  const {TabPane} = Tabs;
  const [state, setState] = useState({
    tabPosition: "left",
  });
  const {arrCinemaShowTime} = useSelector((state) => state.CinemaReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCinemaInfo());
    dispatch(getCinemaShowTime());
  }, []);
  // console.log("arrcinemashowtime", arrCinemaShowTime);
  // console.log("arrcinema", arrCinema);

  const {tabPosition} = state;
  return arrCinemaShowTime ? (
    <div>
      <Tabs tabPosition={tabPosition}>
        {_.map(arrCinemaShowTime, (item, index) => {
          return (
            <TabPane
              tab={
                <img
                  src={item.logo}
                  alt=""
                  className="rounded-full w-10 h-10"
                />
              }
              key={index}>
              <Tabs tabPosition={tabPosition}>
                {_.map(arrCinemaShowTime, (cine, index) => {
                  if (item.maHeThongRap === cine.maHeThongRap) {
                    return _.map(
                      cine.lstCumRap.slice(0, 5),
                      (cineChild, index) => {
                        return (
                          <TabPane
                            tab={
                              <div className="text-center">
                                {" "}
                                <p className="mb-0 font-bold">
                                  {cineChild.tenCumRap}
                                </p>
                                <img
                                  src={cineChild.hinhAnh}
                                  alt=""
                                  className="rounded-full w-10 h-10 mx-auto"
                                />
                                <p>
                                  {cineChild.diaChi.length > 35
                                    ? cineChild.diaChi.slice(0, 35) + "..."
                                    : cineChild.diaChi}
                                </p>
                              </div>
                            }
                            key={index}>
                            {_.map(cineChild.danhSachPhim, (movie, index) => {
                              return (
                                <div key={index} className="flex">
                                  <div className="movie-tab-picture flex">
                                    <img
                                      src={movie.hinhAnh}
                                      className="w-28 h-28 rounded-full"
                                      alt=""
                                      onError={(event) => {
                                        // console.log(event.target.currentSrc);
                                        event.target.src =
                                          "https://picsum.photos/200/200";
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="movie-showtime flex ml-5"
                                    style={{flexDirection: "column"}}>
                                    <p className="mb-5 font-bold">
                                      {movie.tenPhim}
                                    </p>
                                    <div
                                      style={{
                                        flexDirection: "row",
                                        display: "flex",
                                      }}>
                                      {_.map(
                                        movie.lstLichChieuTheoPhim.slice(0, 10),
                                        (item, index) => {
                                          return (
                                            <p
                                              key={index}
                                              className="px-5 py-2 border-2 mr-2 text-2xl">
                                              {item.ngayChieuGioChieu.slice(
                                                11,
                                                16
                                              )}
                                            </p>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </TabPane>
                        );
                      }
                    );
                  }
                })}
              </Tabs>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  ) : (
    <img
      src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
      alt=""
    />
  );
}
