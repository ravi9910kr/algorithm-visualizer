import React, { useState } from "react";
import Button from "../buttons/Button";
import { unSortedArrayGenerator } from "../../algorithms/ArrayGenerator";
import { methiod } from "../canvas/Canvas";
import { BubbleSort } from "../../algorithms/BubbleSort";
const Header = () => {
  const [arr, setArr] = useState([]);
  const unorderdList = (
    <ul>
      <li>
        <Button
          buttonName={"generate array"}
          onClick={(e) => {
            const unSrArr = unSortedArrayGenerator(40);
            setArr(unSrArr);
          }}
        />
      </li>
      <li>
        <Button
          buttonName={"render arr"}
          onClick={(e) => {
            methiod(arr);
          }}
        />
      </li>
      <li>
        <Button
          buttonName={"Bubble Sort"}
          onClick={(e) => {
            BubbleSort(arr, methiod);
          }}
        />
      </li>
    </ul>
  );
  return <header>{unorderdList}</header>;
};
export default Header;
