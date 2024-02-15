import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [showPlants, setShowPlants] = useState([]);

  function searchPlantByName(e){
    const searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm);
    const filteredPlants = showPlants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm)
    );

    setShowPlants(filteredPlants);
}

  return (
    <main>
      <NewPlantForm setShowPlants={setShowPlants} />
      <Search onSearchPlant={searchPlantByName} />
      <PlantList setShowPlants={setShowPlants} showPlants={showPlants} />
    </main>
  );
}

export default PlantPage;
