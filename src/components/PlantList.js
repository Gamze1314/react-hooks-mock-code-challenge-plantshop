import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ setShowPlants, showPlants }) {
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plantsArr) => setShowPlants(plantsArr));
  }, []);

  const lis = showPlants.map((p) => {
    return (
      <PlantCard key={p.name} name={p.name} image={p.image} price={p.price} setShowPlants={setShowPlants} />
    );
  });

  return <ul className="cards">{lis}</ul>;
}

export default PlantList;
