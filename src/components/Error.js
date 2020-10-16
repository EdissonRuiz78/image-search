import React from "react";

const Error = ({ message }) => {
  return (
    <h2 className="my-2 p-3 text-center text-white alert alert-danger">
      {message}
    </h2>
  );
};

export default Error;
