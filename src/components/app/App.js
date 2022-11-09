import React, { Component } from "react";
import "./app.css";
import Header from "../header/Header";
import Canvas from "../canvas/Canvas";
import Footer from "../footer/Footer";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Canvas />
        <Footer />
      </div>
    );
  }
}
