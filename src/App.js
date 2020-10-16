import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [search, updateSearch] = useState("");
  const [results, updateResults] = useState([]);

  useEffect(() => {
    if (search === "") {
      return;
    }

    const getApi = () => {
      const apiKey = "18617425-c9a20206e43583c779ab146ad";
      const ImagePerPage = 30;
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}
        &per_page=${ImagePerPage}`;

      fetch(url)
        .then((response) => response.json())
        .then((response) => updateResults(response.hits));
    };
    getApi();
  }, [search]);

  // const scroll = () => {
  //   const element = document.querySelector(".jumbotron");
  //   element.scrollIntoView("smooth", "start");
  // };

  // const previousPage = () => {
  //   let page = this.state.page;
  //   if (page === 1) {
  //     return null;
  //   }
  //   page--;
  //   this.setState(
  //     {
  //       page,
  //     },
  //     () => {
  //       this.getApi();
  //       this.scroll();
  //     }
  //   );
  // };

  // const nextPage = () => {
  //   let page = this.state.page;
  //   page++;
  //   this.setState(
  //     {
  //       page,
  //     },
  //     () => {
  //       this.getApi();
  //       this.scroll();
  //     }
  //   );
  // };

  //

  // const getData = (data) => {
  //   this.setState(
  //     {
  //       data: data,
  //       page: 1,
  //     },
  //     () => {
  //       this.getApi();
  //     }
  //   );
  // };

  return (
    <div className="app container mt-2">
      <div className="jumbotron p-3">
        <h1 className="text-center">Search images</h1>
        <Search updateSearch={updateSearch} />
      </div>
      <div className="row justify-content-center">
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
