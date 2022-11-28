import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherDetails from "./WeatherDetails";

export default function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Nicosia");
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=5074ec189c637bcee3766de4820faede`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
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
        <button className="searchButton" onClick={getWeatherInfo}>
          Search
        </button>
      </div>
      <WeatherDetails />
    </>
  );
}
