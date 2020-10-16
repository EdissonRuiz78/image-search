import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <h2 className="my-2 p-3 text-center text-white alert alert-danger">
      {message}
    </h2>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
