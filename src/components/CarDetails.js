import React, { useState, useEffect } from "react";
import axios from "axios";
import CarCard from "./CarsCard";
import "./css/CarDetails.css";

function CarDetails() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7272/api/cars/").then((result) => {
      setCars(result.data);
    });
  }, []);

  if (!cars) {
    return (
      <div>
        <h2>Loading car details...</h2>
      </div>
    );
  }

  return (
    <div className="carContainer">
      {cars.map((car) => (
        <CarCard key={cars.id} car={car} />
      ))}
    </div>
  );
}
export default CarDetails;
