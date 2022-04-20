import React from "react";
import { useState } from "react";

import {Navbar} from "../navigationComponents/Navbar";

export const Meatball = (props) => {

  const data = props.data
  const navbarData = data.navbarData

  const [meatballClass, setmeatballClass] = useState("meatball__rest");

  const changemeatballClass = () => {
    meatballClass === "meatball__rest"
      ? setmeatballClass("meatball__active")
      : setmeatballClass("meatball__rest");
  };

  return (
    <div className={meatballClass} onClick={changemeatballClass}>
      <div className={`${meatballClass}-line1`}></div>
      <div className={`${meatballClass}-line2`}></div>
      <div className={`${meatballClass}-line3`}></div>
      <Navbar data = {navbarData}  />
    </div>
  );
};
