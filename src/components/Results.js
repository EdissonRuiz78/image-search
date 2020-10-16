import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Image from "./Image";

const Results = ({ results }) => {
  if (results.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <div className="col-12 row">
        {results.map((image) => (
          <Image key={image.id} image={image} />
        ))}
      </div>
    </Fragment>
  );
};

Results.propTypes = {
  results: PropTypes.array.isRequired,
};

export default Results;
