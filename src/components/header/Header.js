import React, { useState } from "react";
import Button from "../buttons/Button";
import { unSortedArrayGenerator } from "../../algorithms/ArrayGenerator";
import { renderAllElements, renderUnitElement } from "../canvas/Canvas";
import { BubbleSort } from "../../algorithms/BubbleSort";
import "./header.css";

const Header = () => {
  const [arr, setArr] = useState([]);
  const unorderdList = (
    <ul className="list-container">
      <li className="list-item">
        <Button
          buttonName={"generate array"}
          onClick={(e) => {
            const unSrArr = unSortedArrayGenerator(40);
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
