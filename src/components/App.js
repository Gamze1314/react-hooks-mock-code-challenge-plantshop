import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])

const url = "http://localhost:6001/plants"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  //new Plant form submission state update.
  const addNewPlant = (newData) => {
    setPlants([...plants, newData])
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant} />
    </div>
  );
}

export default App;

// when the app starts , i can see all the plants. 