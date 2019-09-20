import React, { useContext, useState } from "react";
import { ImageContext } from "../providers/ImagesProvider";

function Search() {

  const [query, setQuery] = useState("");

  const { searchImage } = useContext(ImageContext);


  const onSubmit = e => {
    e.preventDefault();
    searchImage(query)
  }

  const updateQuery = e => {
    setQuery(e.target.value);
  };


  return (
      <div>
        <form onSubmit={onSubmit}>
          <label>
            
            <input
              value={query}
              onChange={updateQuery}
            />
          </label>
          <button>Search</button>
        </form>
      </div>
  );
}

export default Search;
