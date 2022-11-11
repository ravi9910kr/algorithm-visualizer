import React from "react";

import Header from "../header/Header";
import Canvas from "../canvas/Canvas";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Canvas dimWidth={1080} dimHeight={720} />
      <Footer />
    </div>
  );
};

export default App;
