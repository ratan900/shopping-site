import React from "react";
import { images } from "./images";

const Card = ({ name, category, price, id }) => {
  return (
    <div
      className="tc grow bg-white br3 pa3 ma2 dib ba shadow-1"
      style={{ minWidth: "320px" }}
    >
      <div>
        <img
          style={{
            width: "200px",
            height: "250px",
            marginBottom: "15px",
            borderRadius: "20px",
          }}
          src={images[id - 1]}
          alt="robot"
        />
        <h2>{name}</h2>
        <p>
          Price: <br />
          <b>{price}</b>
        </p>
        <p style={{ color: "#7C99AC" }}>Category: {category}</p>
      </div>
    </div>
  );
};

export default Card;
