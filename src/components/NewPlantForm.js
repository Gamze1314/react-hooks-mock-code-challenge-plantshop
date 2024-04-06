import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [ formData, setFormData ] = useState({
    name : "", 
    image: "", 
    price: 0
  })

function handleSubmit(e) { 
  e.preventDefault();

  const configObj = {
    name : formData.name,
    image: formData.image,
    price: formData.price
  }

// POST request
  fetch("http://localhost:6001/plants", {
    method : "POST", 
    headers: {
      "Content-type" : "application/json"
    },
    body: JSON.stringify(configObj)
  })
    .then(res => res.json())
    .then(newData => addNewPlant(newData))
}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input onChange={(e) => setFormData({ ...formData, name : e.target.value})} 
        value={formData.name} 
        type="text" 
        name="name" 
        placeholder="Plant name" />
        <input onChange={(e) => setFormData({ ...formData, image : e.target.value})}
        value={formData.image}
        type="text" 
        name="image" 
        placeholder="Image URL" />
        <input onChange={(e) => setFormData({ ...formData, price : e.target.value})}
        value={formData.price}
        type="number"
        name="price" 
        step="0.01" 
        placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

// add new plant to the page by submitting the form. 
// send POST request, and update state on the front-end 
// obj tht you will be sending to the backend is initialized in the formData state object.

//confg obj  {
//   "name": "string",
//   "image": "string",
//   "price": number
// }