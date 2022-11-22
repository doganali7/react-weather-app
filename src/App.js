import "./App.css";
import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5074ec189c637bcee3766de4820faede";

function App() {
  return (
    <div className="App">
      <Info />
      <Form />
      <Weather />
    </div>
  );
}

export default App;
