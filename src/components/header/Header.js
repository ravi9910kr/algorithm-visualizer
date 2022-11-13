import React, { useState } from "react";
import Button from "../buttons/Button";
import { unSortedArrayGenerator } from "../../algorithms/ArrayGenerator";
import {
  renderAllElements,
  renderUnitElement,
  barWidth,
} from "../canvas/Canvas";
import { BubbleSort } from "../../algorithms/BubbleSort";
import { LinearSearch } from "../../algorithms/linearSearch";
import { BinarySearch } from "../../algorithms/BinarySearch";
import "./header.css";
import { SelectionSort } from "../../algorithms/SelectionSort";
import InsertionSort from "../../algorithms/InsertionSort";

const Header = () => {
  const [arr, setArr] = useState([]);
  const [arrLen, setArrLen] = useState(0);
  const unorderdList = (
    <ul className="list-container">
      <li>
        <input
          style={{ display: "block" }}
          name="lenInput"
          type={"range"}
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
          buttonName={"linear search"}
          onClick={(e) => {
            renderAllElements(arr);
            LinearSearch(
              arr,
              arr[Math.floor(Math.random() * arrLen)],
              renderUnitElement,
              barWidth
            );
          }}
        />
      </li>
      <li className="list-item">
        <Button
          buttonName={"binary search"}
          onClick={(e) => {
            renderAllElements(arr);
            BinarySearch(
              arr,
              arr[Math.floor(Math.random() * arrLen)],
              renderUnitElement,
              barWidth
            );
          }}
        />
      </li>
      <li className="list-item">
        <Button
          buttonName={"Bubble Sort"}
          onClick={(e) => {
            renderAllElements(arr);
            BubbleSort(arr, renderUnitElement, barWidth);
          }}
        />
      </li>
      <li className="list-item">
        <Button
          buttonName={"Selection Sort"}
          onClick={(e) => {
            renderAllElements(arr);
            SelectionSort(arr, renderUnitElement, barWidth);
          }}
        />
      </li>
      <li className="list-item">
        <Button
          buttonName={"Insertion Sort"}
          onClick={(e) => {
            renderAllElements(arr);
            InsertionSort (arr, renderUnitElement, barWidth);
          }}
        />
      </li>
    </ul>
  );
  return <header className="header-container">{unorderdList}</header>;
};

export default Header;
