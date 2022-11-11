import React from "react";
import Button from "../buttons/Button";
import { unSortedArrayGenerator } from "../../algorithms/ArrayGenerator";
const Header = () => {
  const unorderdList = (
    <ul>
      <li>
        <Button
          buttonName={"generate array"}
          onClick={(e) => {
            console.log(unSortedArrayGenerator(40));
          }}
        />
      </li>
    </ul>
  );
  return <header>{unorderdList}</header>;
};
export default Header;
