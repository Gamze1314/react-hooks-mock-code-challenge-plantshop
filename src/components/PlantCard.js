import React, { useState } from "react";

function PlantCard({ name, image, price, setShowPlants }) {
  const [inStock, setInStock] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [isEditingPrice, setIsEditingPrice] = useState(false);

  function handleCardClick() {
    setIsEditingPrice(true);
  }

  function handlePriceUpdate(plant) {
    // Send PATCH request with the updated price

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: updatedPrice }),
    })
      .then((r) => r.json())
      .then((updatedPlant) => {
        // Update the UI with the new price
        setUpdatedPrice(updatedPrice);
        setIsEditingPrice(false);

        // Update the showPlants state with the new price
        setShowPlants((prevPlants) =>
          prevPlants.map((p) =>
            p.id === updatedPlant.id ? { ...p, price: updatedPlant.price } : p
          )
        );
      })
      .catch((error) => {
        console.error("Error updating price:", error);
      });
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {isEditingPrice ? (
        <div>
          <input
            type="number"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
          />
          <button onClick={handlePriceUpdate}>Update Price</button>
        </div>
      ) : (
        <p onClick={handleCardClick}>Price: {updatedPrice}</p>
      )}
      {true ? (
        <button onClick={() => setInStock(!inStock)} className="primary">
          {inStock ? "In Stock" : "Out of Stock"}
        </button>
      ) : (
        <button onClick={() => setInStock(!inStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
