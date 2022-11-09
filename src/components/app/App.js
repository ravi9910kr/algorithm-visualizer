import React from "react";

import "./app.css";
import Header from "../header/Header";
import Canvas from "../canvas/Canvas";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Canvas />
      <Footer />
    </div>
  );
};

export default App;
