import React from "react";
import restaurants from "../data/restaurants";

const RestaurantList = () => (
  <div>
    <h1>Restaurantes</h1>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {restaurants.map((rest, idx) => (
        <div key={idx} style={{ border: "1px solid #ccc", padding: 16, width: 300 }}>
          <img src={rest.image} alt={rest.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
          <h2>{rest.name}</h2>
          <p>{rest.description}</p>
          <p><strong>Dirección:</strong> {rest.address}</p>
        </div>
      ))}
    </div>
  </div>
);

export default RestaurantList;