import React from "react";

const Pages = (props) => {
  return (
    <div className="py-2 mb-3">
      <button 
        onClick={props.previousPage} 
        className="btn btn-info mr-1" 
        type="button"
      >
      Previous &larr;
      </button>
      <button 
        onClick={props.nextPage}
        className="btn btn-info" 
        type="button"
      >
      Next &rarr;
      </button>
    </div>
  )
}

export default Pages;