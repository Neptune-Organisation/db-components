import React from "react";
import { useState } from "react";

import {Navbar} from "../navigationComponents/Navbar";

export const Doener = (props) => {

  const data = props.data
  const navbarData = data.navbarData

  const [doenerClass, setDoenerClass] = useState("doener__rest");

  const changeDoenerClass = () => {
    doenerClass === "doener__rest"
      ? setDoenerClass("doener__active")
      : setDoenerClass("doener__rest");
  };

  return (
    <div className={doenerClass} onClick={changeDoenerClass}>
      <div className={`${doenerClass}-line1`}></div>
      <div className={`${doenerClass}-line2`}></div>
      <div className={`${doenerClass}-line3`}></div>
      <Navbar data = {navbarData} />
    </div>
  );
};
