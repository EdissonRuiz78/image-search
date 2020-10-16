import React, { useState } from "react";
import Error from "./Error";

const Search = () => {
  const [search, updateSearch] = useState("");
  const [error, updateError] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      updateError(true);
      return;
    }
    updateError(false);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            onChange={(e) => updateSearch(e.target.value)}
            type="text"
            class="form-control text-center"
            placeholder="Type Something"
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-outline-primary btn-block"
            value="Search..."
          />
        </div>
      </div>
      {error ? <Error message="Type Something to Search" /> : null}
    </form>
  );
};

export default Search;
