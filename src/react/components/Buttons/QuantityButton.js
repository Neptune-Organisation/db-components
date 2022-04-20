import React from "react";
import { useState } from "react";
import {Icons} from "../MediaComponents/Icons";

export const QuantityButton = (props) => {
  const data = props.data
  const btnClass = data.btnClass
  const btnType = data.btnType
  const iconClass = data.iconClass
  const [quantity, setQuantity] = useState(null);

  return (
    <button type={btnType} className={btnClass || "btn quantity-button"}>
      <Icons.AiOutlinePlusCircle
        onClick={() => setQuantity(quantity++)}
        className={`${iconClass} || iconSmall quantity-button__icon`}
      />
      <Icons.AiOutlineMinusCircle
        onClick={() => setQuantity(quantity--)}
        className={`${iconClass} || iconSmall quantity-button__icon`}
      />
    </button>
  );
};