import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  const url = "http://localhost:6001/plants";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  //new Plant form submission state update.
  const addNewPlant = (newData) => {
    setPlants([...plants, newData]);
  };

function handleSearch(e) {
  // Update search state with user input
  const userInput = e.target.value;
  setSearch(userInput.trim()); // Trim whitespace from user input

  // If search input is not empty, filter the plants
  if (userInput !== "") {
    const filteredPlants = plants.filter((plant) => {
      return plant.name.toLowerCase().includes(userInput.toLowerCase());
    });
    setPlants(filteredPlants); // Update plants state with filtered plants
  } else {
    // If search input is empty, reset plants to original state
    setPlants(plants);
  }
}

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        addNewPlant={addNewPlant}
        search={search}
        onSearchPlant={handleSearch}
      />
    </div>
  );
}

export default App;

// when the app starts , i can see all the plants.
