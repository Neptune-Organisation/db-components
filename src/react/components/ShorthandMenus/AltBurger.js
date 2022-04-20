import React from "react";
import { useState } from "react";

import {Navbar} from "../navigationComponents/Navbar";

export const AltBurger = (props) => {

  const data = props.data
  const navbarData = data.navbarData
  
  const [altBurgerClass, setAltBurgerClass] = useState("altBurger__rest");

  const changeAltBurgerClass = () => {
    altBurgerClass === "altBurger__rest"
      ? setAltBurgerClass("altBurger__active")
      : setAltBurgerClass("altBurger__rest");
  };

  return (
    <div className={altBurgerClass} onClick={changeAltBurgerClass}>
    <div className={`${altBurgerClass}-group1`}>
      <div className={`${altBurgerClass}-line1`}></div>
      <div className={`${altBurgerClass}-line2`}></div>
      <div className={`${altBurgerClass}-line3`}></div>
    </div>
    <div className={`${altBurgerClass}-group2`}>
      <div className={`${altBurgerClass}-line1`}></div>
      <div className={`${altBurgerClass}-line2`}></div>
      <div className={`${altBurgerClass}-line3`}></div>
    </div>
    <div className={`${altBurgerClass}-group3`}>
      <div className={`${altBurgerClass}-line1`}></div>
      <div className={`${altBurgerClass}-line2`}></div>
      <div className={`${altBurgerClass}-line3`}></div>
    </div>
    <Navbar data = {navbarData} />
  </div>
  );
};
