import _ from "lodash";
import React from "react";
import {useSelector} from "react-redux";

export default function Footer() {
  const {arrCinema} = useSelector((state) => state.CinemaReducer);

  return (
    <div>
      <footer className="py-6 text-white" style={{backgroundColor: "black"}}>
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:m-0 m-auto md:pb-0 md:col-span-3">
              <img
                src={require("../../../../assets/img/eventlogo.webp").default}
                alt="logo"
                className="md:w-52 w-40"
              />
            </div>
            <div className="md:col-span-6 col-span-full">
              <h2
                className="text-center md:text-left md:mb-12 mb-6"
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                }}>
                Partnership
              </h2>
              <div className="flex justify-around w">
                {_.map(arrCinema, (item, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={item.logo}
                        alt=""
                        className="w-9 h-8 rounded-full"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2021 All rights reserved</span>
              <a href="#" style={{color: "white"}}>
                <span>Privacy policy</span>
              </a>
              <a href="#" style={{color: "white"}}>
                <span>Terms of service</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
