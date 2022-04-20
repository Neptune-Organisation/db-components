import React from "react";
import {Icons} from "../mediaComponents/Icons";

export const IconGroup = (props) => {
  const data = props.data
  const iconsContainerClass = data.iconsContainerClass
  const iconClass = data.iconsClass
  const iconList = data.iconList
  return (
    <div className={iconsContainerClass ||"icon-group"}>
      <Icons.AiOutlineMinusCircle className={iconClass ||"iconMed"} />
      <Icons.AiOutlinePlusCircle className={iconClass ||"iconMed"} />
      <Icons.AiOutlineSearch className={iconClass || "iconMed"} />
    </div>
  );
};
