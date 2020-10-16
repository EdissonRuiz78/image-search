import React, { Component } from "react";
import Search from "./components/Search";
import Results from "./components/Results";

class App extends Component {
  state = {
    data: "",
    images: [],
    page: "",
  };

  scroll = () => {
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("smooth", "start");
  };

  previousPage = () => {
    let page = this.state.page;
    if (page === 1) {
      return null;
    }
    page--;
    this.setState(
      {
        page,
      },
      () => {
        this.getApi();
        this.scroll();
      }
    );
  };

  nextPage = () => {
    let page = this.state.page;
    page++;
    this.setState(
      {
        page,
      },
      () => {
        this.getApi();
        this.scroll();
      }
    );
  };

  getApi = () => {
    const apiKey = "18617425-c9a20206e43583c779ab146ad";
    const search = this.state.data;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}
    &per_page=30&page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => this.setState({ images: response.hits }));
  };

  getData = (data) => {
    this.setState(
      {
        data: data,
        page: 1,
      },
      () => {
        this.getApi();
      }
    );
  };

  render() {
    return (
      <div className="app container mt-2">
        <div className="jumbotron p-3">
          <h1 className="text-center">Search images</h1>
          <Search getData={this.getData} />
        </div>
        <div className="row justify-content-center">
          <Results
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
