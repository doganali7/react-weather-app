import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherDetails from "./WeatherDetails";

export default function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Nicosia");
  const [tempInfo, settempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=5074ec189c637bcee3766de4820faede`;
      let res = await fetch(url);
      let data = await res.json();
      const { temp, pressure, humidity } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        pressure,
        humidity,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };
      settempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

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
      <WeatherDetails {...tempInfo} />
    </>
  );
}
