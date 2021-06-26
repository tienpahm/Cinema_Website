import React from "react";
import {Fragment} from "react";
import {Route} from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
  const {Component, ...restProps} = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="h-auto">
            <Header {...propsRoute} />

            <Component {...propsRoute} />
            <Footer />
          </div>
        );
      }}></Route>
  );
};
