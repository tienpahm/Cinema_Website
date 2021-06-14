import React from "react";
import "./FilmFlipCard.css";

export default function FilmFlipCard(props) {
  let {item} = props;
  console.log(item);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* <img
            className="lg:h-96 md:h-36 px-5 py-3 w-full object-cover object-center"
            src={item.hinhAnh}
            alt="blog"
            onError={(event) => {
              // console.log(event.target.currentSrc);
              event.target.src = "https://picsum.photos/200/200";
            }}
          /> */}
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect &amp; Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}
