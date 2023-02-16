import React, { useState } from "react";
import './css/CarsCard.css';

const CarCard = (props) => {
  return (
    <div className="Card">
      <h2>
        {props.car.make} {props.car.model} ({props.car.year})
      </h2>
      <p>Price: ${props.car.price}</p>
      <p>Message: {props.car.message}</p>
    </div>
  );
};

export default CarCard;
