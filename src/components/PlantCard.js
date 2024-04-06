import React, { useState } from "react";

function PlantCard({plant}) {
const { name, image, price }  = plant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
        <div>
          <input
            type="number"
          />
          <button onClick={null}>Update Price </button>
        </div>
        <p onClick={null}>Price: {price}</p>
        <button  className="primary">
        </button>
        <button onClick={null}>Out of Stock</button>
    </li>
  );
}

export default PlantCard;
