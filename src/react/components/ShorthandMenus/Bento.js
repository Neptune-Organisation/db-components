import React from "react";
import { useState } from "react";

import {Navbar} from "../navigationComponents/Navbar";

export const Bento = (props) => {

  const data = props.data
  const navbarData = data.navbarData

  const [bentoClass, setbentoClass] = useState("bento__rest");

  const changebentoClass = () => {
    bentoClass === "bento__rest"
      ? setbentoClass("bento__active")
      : setbentoClass("bento__rest");
  };
  return (
    <div className={bentoClass} onClick={changebentoClass}>
      <div className={`${bentoClass}-group1`}>
        <div className={`${bentoClass}-line1`}></div>
        <div className={`${bentoClass}-line2`}></div>
        <div className={`${bentoClass}-line3`}></div>
      </div>
      <div className={`${bentoClass}-group2`}>
        <div className={`${bentoClass}-line1`}></div>
        <div className={`${bentoClass}-line2`}></div>
        <div className={`${bentoClass}-line3`}></div>
      </div>
      <div className={`${bentoClass}-group3`}>
        <div className={`${bentoClass}-line1`}></div>
        <div className={`${bentoClass}-line2`}></div>
        <div className={`${bentoClass}-line3`}></div>
      </div>
      <Navbar data = {navbarData} />
    </div>
  );
};
