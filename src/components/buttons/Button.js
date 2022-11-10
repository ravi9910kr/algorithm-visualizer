import React from "react";

const Button = ({ onClick, buttonName }) => {
  return (
    <button className="btn" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
