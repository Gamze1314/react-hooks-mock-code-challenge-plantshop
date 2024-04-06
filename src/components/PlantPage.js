import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants , addNewPlant ,search, onSearchPlant }) {
  

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search search={search} onSearchPlant={onSearchPlant} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
