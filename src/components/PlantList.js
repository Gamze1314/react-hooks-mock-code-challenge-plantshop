import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const lis = plants.map((plant) => { 
    return <PlantCard key={plant.id} plant={plant} />
  })

  return <ul className="cards">{lis}</ul>;
}

export default PlantList;
