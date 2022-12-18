import React, { useState, useEffect } from "react";
import axios from "axios";
import Beer from "./Beer";

function BeersList() {
  const [beers, setbeers] = useState([]);
  const [beersSearchValue, setBeersSearchValue] = useState("");

  const fetchBeers = () => {
    axios
      .get("http://localhost:5000/beers")
      .then((response) => setbeers(response.data));
  };

  const searchBeersHandler = (event) => {
    setBeersSearchValue(event.target.value);
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <>
      <h1>Beers List</h1>
      <input
        className="searchBar-input"
        type="search"
        name="search"
        placeholder="Search here"
        onChange={searchBeersHandler}
        value={beersSearchValue}
      />
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5">
        {beers
          ? beers
              .filter((beer) =>
                beer.name.toLowerCase().includes(beersSearchValue)
              )
              .map((beer) => <Beer {...beer} />)
          : null}
      </div>
    </>
  );
}

export default BeersList;
