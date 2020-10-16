import React from "react";
import PropTypes from "prop-types";

const Pages = ({ page, updatePage, totalpages }) => {
  const previousPage = () => {
    if (page === 1) {
      return;
    }
    const newPage = page - 1;
    updatePage(newPage);
  };

  const nextPage = () => {
    const newPage = page + 1;
    if (newPage > totalpages) {
      return;
    }
    updatePage(newPage);
  };

  return (
    <div className="py-2 mb-3">
      {page === 1 ? null : (
        <button
          onClick={previousPage}
          className="btn btn-outline-primary mr-1"
          type="button"
        >
          &larr; Previous
        </button>
      )}
      {page === totalpages ? null : (
        <button
          onClick={nextPage}
          className="btn btn-outline-primary"
          type="button"
        >
          Next &rarr;
        </button>
      )}
    </div>
  );
};

Pages.propTypes = {
  page: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired,
  totalpages: PropTypes.number.isRequired,
};

export default Pages;
