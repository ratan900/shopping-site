import React from "react";
import Card from "./Card";

const CardList = ({ products }) => {
  return (
    <div>
      {products.map((user, i) => {
        return (
          <Card
            key={i}
            price={products[i].price}
            name={products[i].name}
            category={products[i].category}
            id={products[i].id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
