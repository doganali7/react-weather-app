import React, { useState } from "react";
import "./style.css";
import WeatherDetails from "./WeatherDetails";

export default function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Nicosia");
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Type City Name"
            id="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <button className="searchButton">Search</button>
      </div>
      <WeatherDetails />
    </>
  );
}
