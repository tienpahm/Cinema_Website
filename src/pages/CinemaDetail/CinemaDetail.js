import _ from "lodash";
import React, {useEffect, useRef, useState} from "react";
import {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bookingTicket, getCinemaDetail} from "../../redux/actions/CinemaAction";
import {TICKET_PRICE, VIP_TICKET_PRICE} from "../../util/settings/config";
import "./CinemaDetail.css";

export default function CinemaDetail(props) {
  useEffect(() => {
    dispatch(getCinemaDetail(props.match.params.id));
  }, []);
  const dispatch = useDispatch();
  const {cinemaDetail} = useSelector((state) => state.CinemaReducer);
  console.log(cinemaDetail);
  const [arraySeat, setArraySeat] = useState([]);

  const calculatePrice = () => {
    let selectedSeats = [];
    arraySeat.map((item, index) => {
      return selectedSeats.push(item.giaVe);
    });

    let total = _.reduce(
      selectedSeats,
      (sum, price) => {
        return (sum += price);
      },
      0
    );
    return <div>{total}</div>;
  };

  const danhSachVe = () => {
    let danhSachVe = _.map(arraySeat, (item, index) => {
      return {maGhe: item.maGhe, giaVe: item.giaVe};
    });
    return danhSachVe;
  };

  return (
    <Fragment>
      {cinemaDetail ? (
        <div
          className="cinema-detail flex justify-center py-8 text-white"
          style={{backgroundColor: "#151515"}}>
          <div className="cinema-detail-movie-picture mr-8">
            <img
              src={cinemaDetail?.thongTinPhim.hinhAnh}
              className="w-28"
              alt=""
            />
          </div>
          <div className="cinema-detail-movie-text text-lg">
            <div className="text-3xl font-bold mb-2">
              {cinemaDetail?.thongTinPhim.tenPhim}
            </div>
            <div className="mb-2">
              {cinemaDetail?.thongTinPhim.ngayChieu} ,{" "}
              {cinemaDetail?.thongTinPhim.gioChieu}
            </div>
            <div>{cinemaDetail?.thongTinPhim.tenCumRap}</div>
            <div
              style={{backgroundColor: "#727575"}}
              className="px-5 py-2 mt-2 rounded inline-block">
              {cinemaDetail?.thongTinPhim.tenRap}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
      <div
        className="py-3 text-white font-semibold text-lg "
        style={{backgroundColor: "black", padding: "20px 18%"}}>
        <span>Please Select Your Seat </span>
      </div>
      {cinemaDetail ? (
        <div className="py-24 w-4/5 mx-auto flex flex-wrap justify-center">
          <div className="w-2/5">
            <div className="flex justify-around mb-14">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 mb-2 text-center bg-green-400 rounded cursor-pointer "
                  style={{boxShadow: "0px 0px 11px #00b300"}}>
                  {/* <i
                    className="fa fa-check"
                    style={{
                      position: "relative",
                      top: "50%",
                      transform: "translateY(-70%)",
                    }}></i> */}
                </div>
                <span>Your seat(s)</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2 bg-gray-400 rounded cursor-pointer "></div>
                <span>Available</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2 bg-red-600 rounded cursor-pointer "></div>
                <span>Booked</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2 bg-yellow-300 rounded cursor-pointer "></div>
                <span>VIP seat</span>
              </div>
            </div>
            <div className="mb-14 text-center font-bold text-xl  ">
              <span className="border-b-8 border-gray-700">
                FRONT OF CINEMA
              </span>
            </div>
            <div className="flex flex-wrap place-items-center gap-y-2 gap-x-0 seat-array">
              {_.map(cinemaDetail.danhSachGhe, (item, index) => {
                if (item.daDat) {
                  return (
                    <div
                      className="w-8 h-8 mr-2 mb-2 text-center bg-red-600 rounded"
                      style={{boxShadow: "0px 0px 5px #F87171"}}></div>
                  );
                } else {
                  if (item.loaiGhe === "Vip") {
                    return (
                      <div
                        className="w-8 h-8 mr-2 mb-2 bg-yellow-300 rounded cursor-pointer"
                        onClick={(event) => {
                          let seatClass = event.target.className;
                          if (seatClass.includes("seat")) {
                            event.target.className =
                              "w-8 h-8 mr-2 mb-2 bg-yellow-300 rounded cursor-pointer";
                            let arr = arraySeat.filter(
                              (seat) => item.maGhe !== seat.maGhe
                            );
                            setArraySeat(arr);
                          } else {
                            event.target.className += " seat";
                            let index = arraySeat.findIndex(
                              (seat) => item.maGhe === seat.maGhe
                            );
                            if (index === -1) {
                              setArraySeat([...arraySeat, item]);
                            }
                          }
                        }}>
                        {(event) => {
                          console.log(event.target);
                        }}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="w-8 h-8 mr-2 mb-2 bg-gray-400 rounded cursor-pointer"
                        onClick={(event) => {
                          let seatClass = event.target.className;
                          if (seatClass.includes("seat")) {
                            event.target.className =
                              "w-8 h-8 mr-2 mb-2 bg-gray-400 rounded cursor-pointer";
                            let arr = arraySeat.filter(
                              (seat) => item.maGhe !== seat.maGhe
                            );
                            setArraySeat(arr);
                          } else {
                            event.target.className += " seat";
                            let index = arraySeat.findIndex(
                              (seat) => item.maGhe === seat.maGhe
                            );
                            if (index === -1) {
                              setArraySeat([...arraySeat, item]);
                            }
                          }
                        }}></div>
                    );
                  }
                }
                //   return (
                //       {item.daDat ?  <div
                //         //   style={{flex: "0 0 50px"}}
                //         className="w-12 h-12 bg-gray-400 rounded "></div> : }

                //   );
              })}
            </div>
          </div>
          <div className="w-2/5">
            <div
              className="border px-5 py-10"
              style={{boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 15%)"}}>
              <div className="text-center font-bold text-2xl mb-5">
                Booking Summary
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="text-lg">
                  {
                    _.filter(arraySeat, (item) => item.loaiGhe === "Thuong")
                      .length
                  }{" "}
                  x Standard Ticket
                </div>
                <div className="text-xl font-semibold">${TICKET_PRICE}</div>
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="text-lg">
                  {_.filter(arraySeat, (item) => item.loaiGhe === "Vip").length}{" "}
                  x VIP Ticket
                </div>
                <div className="text-xl font-semibold">${VIP_TICKET_PRICE}</div>
              </div>

              <div className="flex justify-between mb-5">
                <div className="text-lg font-normal">
                  Standard seat number :
                </div>
                <div className="flex">
                  {_.map(arraySeat, (item, index) => {
                    if (item.loaiGhe === "Thuong") {
                      return (
                        <div className="mx-2 text-xl font-semibold ">
                          {item.tenGhe}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <div className="text-lg font-normal">VIP seat number :</div>
                <div className="flex">
                  {_.map(arraySeat, (item, index) => {
                    if (item.loaiGhe === "Vip") {
                      return (
                        <div className="mx-2 text-xl font-semibold ">
                          {item.tenGhe}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-2xl my-5">
                <div>Total price</div>
                <div className="flex">${calculatePrice()}</div>
              </div>
              <div className="text-center">
                <button
                  className="py-2 px-10 text-lg mt-5 bg-gray-900 text-white rounded-full"
                  onClick={() => {
                    let ticketContent = {
                      ticket: {
                        maLichChieu: cinemaDetail.thongTinPhim.maLichChieu,
                        danhSachVe: danhSachVe(),
                      },
                      sessionId: props.match.params.id,
                    };

                    dispatch(bookingTicket(ticketContent));
                  }}>
                  Complete Your Order
                </button>
              </div>
            </div>
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
