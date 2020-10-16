import React, { Component, createRef } from "react";

class Search extends Component {

  searchRef = createRef();

  handleOnChange = (event) => {
    event.preventDefault();
    const data = this.searchRef.current.value;
    this.props.getData(data);
  }

  render() {
    return(
      <form onSubmit={this.handleOnChange}>
        <div className="row">
          <div className="form-group col-md-8">
          <input
            ref={this.searchRef} 
            type="text" 
            class="form-control text-center" 
            placeholder="Type Something"/>
          </div>
          <div className="form-group col-md-4">
            <input 
              type="submit" 
              className="btn btn-outline-primary btn-block"
              value="Search..."
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Search;

