import React from "react";

const Card = ({ name, category, price }) => {
  return (
    <div
      className="tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5"
      style={{ minWidth: "300px" }}
    >
      <div>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p>{category}</p>
      </div>
    </div>
  );
};

export default Card;
