import React from "react";
import { useState } from "react";

import {Navbar} from "../navigationComponents/Navbar";

export const Burger = (props) => {

  const data = props.data
  const navbarData = data.navbarData

  
  const [burgerClass, setBurgerClass] = useState("burger__rest");

  const changeBurgerClass = () => {
    burgerClass === "burger__rest"
      ? setBurgerClass("burger__active")
      : setBurgerClass("burger__rest");
  };

  return (
    <div className={burgerClass} onClick={changeBurgerClass}>
      <div className={`${burgerClass}-line1`}></div>
      <div className={`${burgerClass}-line2`}></div>
      <div className={`${burgerClass}-line3`}></div>
      <Navbar data = {navbarData} /> 
    </div>
  );
};
