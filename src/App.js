import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Slide2 from "./slides/Slide2";
import Slide1 from "./slides/Slide1";

function App() {
  return (
    <div className="App">
      {/* <Slide1 /> */}
      <Slide2 />
      <footer></footer>
    </div>
    
  );
}

export default App;
