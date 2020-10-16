import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Search = ({ updateSearch }) => {
  const [data, updateData] = useState("");
  const [error, updateError] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (data.trim() === "") {
      updateError(true);
      return;
    }
    updateError(false);
    updateSearch(data);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            onChange={(e) => updateData(e.target.value)}
            type="text"
            className="form-control text-center"
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

Search.propTypes = {
  updateSearch: PropTypes.func.isRequired,
};

export default Search;
