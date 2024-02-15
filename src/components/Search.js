import React, { useState } from "react";

function Search({ onSearchPlant }) {
  const [search, setSearch] = useState("");

  function handleChange(e){
    const userInput = e.target.value;
    setSearch(userInput)
    onSearchPlant(e)
  }

  console.log(search)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
