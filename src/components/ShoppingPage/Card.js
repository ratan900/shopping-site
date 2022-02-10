import React from "react";
import { images } from "./images";
import "./Card.css";

const Card = ({ name, category, price, id }) => {
  return (
    <div
      className="grow bg-white br3 ma2 dib ba b--light-silver"
      style={{
        minWidth: "230px",
        marginRight: "30px",
        padding: "15px 15px 0",
      }}
    >
      <div>
        <img
          style={{
            width: "150px",
            height: "200px",
            marginBottom: "15px",
            borderRadius: "20px",
            padding: "10 px",
            objectFit: "contain",
          }}
          src={images[id - 1]}
          alt="product"
        />
        <div
          className="flex-container"
          // style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p>{name}</p>
          <b>
            <p style={{ color: "#4989F9" }}>{"₹" + price}</p>
          </b>
        </div>
        <p
          className="flex-container"
          style={{
            color: "#7C99AC",
            marginLeft: "auto",
            fontSize: "14px",
            marginTop: "-10px",
          }}
        >
          {category}
        </p>
      </div>
    </div>
  );
};

export default Card;
