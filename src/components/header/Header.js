import React, { useState } from "react";
import Button from "../buttons/Button";
import { unSortedArrayGenerator } from "../../algorithms/ArrayGenerator";
import { renderAllElements } from "../canvas/Canvas";
import { BubbleSort } from "../../algorithms/BubbleSort";
import "./header.css";

const Header = () => {
  const [arr, setArr] = useState([]);
  const [arrLen, setArrLen] = useState();
  const unorderdList = (
    <ul className="list-container">
      <li>
        <input
          style={{ display: "block" }}
          name="lenInput"
          type={"range"}
          min={"30"}
          max={"270"}
          step={"3"}
          onChange={(e) => {
            const ll = Number.parseInt(e.target.value);
            setArrLen(ll);
            const unSrArr = unSortedArrayGenerator(ll);
            setArr(unSrArr);
            renderAllElements(unSrArr);
          }}
        />
        <label htmlFor="lenInput">length of array : {arrLen}</label>
      </li>
      <li className="list-item">
        <Button
          buttonName={"generate array"}
          onClick={(e) => {
            const unSrArr = unSortedArrayGenerator(arrLen);
            setArr(unSrArr);
            renderAllElements(unSrArr);
          }}
        />
      </li>
      <li className="list-item">
        <Button
          buttonName={"Bubble Sort"}
          onClick={(e) => {
            BubbleSort(arr, renderAllElements);
          }}
        />
      </li>
    </ul>
  );
  return <header className="header-container">{unorderdList}</header>;
};

export default Header;
