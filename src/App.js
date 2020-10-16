import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Pages from "./components/Pages";

function App() {
  const [search, updateSearch] = useState("");
  const [results, updateResults] = useState([]);
  const [page, updatePage] = useState(1);
  const [totalpages, updateTotalPages] = useState(0);

  useEffect(() => {
    if (search === "") {
      return;
    }

    const getApi = async () => {
      const apiKey = "18617425-c9a20206e43583c779ab146ad";
      const ImagePerPage = 16;
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}
        &per_page=${ImagePerPage}&page=${page}`;

      const resultAPI = await fetch(url);
      const response = await resultAPI.json();
      updateResults(response.hits);
      const total = Math.ceil(response.totalHits / ImagePerPage);
      updateTotalPages(total);

      const scrollPage = document.querySelector(".jumbotron");
      scrollPage.scrollIntoView({ behavior: "smooth" });
    };
    getApi();
  }, [search, page]);

  return (
    <div className="app container mt-2">
      <div className="jumbotron p-3">
        <h1 className="text-center">Search images</h1>
        <Search updateSearch={updateSearch} />
      </div>
      <div className="row justify-content-center">
        <Results results={results} />
        {totalpages === 0 ? null : (
          <Pages page={page} updatePage={updatePage} totalpages={totalpages} />
        )}
      </div>
    </div>
  );
}

export default App;
