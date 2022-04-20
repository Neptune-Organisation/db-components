import React from "react";
import {SendButton} from "../buttons/SendButton";
import { SelectOption } from "./SelectOption";

export const DropdownMenu = (props) => {
  const data = props.data
  const dropdownMenuClass = data.DropdownMenuClass
  const dropdownMenuLabel = data.dropdownMenuLabel
  const dropdownSelectClass = data.dropdownSelectClass
  const menuOptions = data.menuOptions;
  const menuName = data.menuName

  return (
    <div className={dropdownMenuClass || "dropdown-menu"}>
      <label htmlFor={dropdownMenuLabel}>
        <select name={menuName} className={dropdownSelectClass || "dropdown-menu__select"}>
          {menuOptions &&
            menuOptions.map((option) => (
              <SelectOption data = {option} />
            ))}
        </select>
        <SendButton data = {data} />
      </label>
    </div>
  );
};
