import React from "react";
import "./button.css";

const Button = ({ onClick, buttonName }) => {
  return (
    <button className="btn" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
