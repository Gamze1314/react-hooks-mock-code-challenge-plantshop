import React, { useState } from "react";

function NewPlantForm({setShowPlants }) {
  // initial state
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price:""
  })
function handleSubmit(e){
  e.preventDefault();

  setFormData({
    ...formData,
    name: e.target.name.value,
    image: e.target.image.value,
    price: e.target.price.value,
  });

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then(() =>
      setShowPlants((prevPlants) => [...prevPlants, formData])
    )
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input onChange={(e) => setFormData({...formData, name : e.target.value})} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setFormData({...formData, image: e.target.value})} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setFormData({...formData, price: e.target.value})} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
