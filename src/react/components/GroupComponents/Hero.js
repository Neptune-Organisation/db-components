import React from "react";
import {Image} from "../MediaComponents/Image"
export const Hero = (props) => {
  const data = props.data
  const heroClass = data.heroClass
  const heroContentClass = data.heroContentClass
  const heroTitle = data.heroTitle;
  const heroTitleClass = data.heroTitleClass
  const heroSlogan = data.heroSlogan;
  const heroSloganClass = data.heroSloganClass
  const img = data.img
  
  return (
    <div className={heroClass || "hero"}>
      <div className={heroContentClass || "hero__content"}>
        <h2 className={heroTitleClass || "hero__title"}>{heroTitle}</h2>
        <p className={heroSloganClass ||"hero__slogan"}>{heroSlogan}</p>
      </div>
      <Image data = {img} />
    </div>
  );
};
