import React, { Component } from "react";
import "./buttons.css"

export default class Button extends Component {
  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>{this.props.buttonName}</button>
    );
  }
}
