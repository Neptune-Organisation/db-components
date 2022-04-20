import React from "react";
export const AddToCartButton = (props) => {
  const data = props.data
  const btnClass = data.btnClass
  const btnType = data.btnType
  const submitClass = data.submitClass

  return (
    <button type={type} className={btnClass || "btn addtocart-button"}>
      <input type={btnType || "submit"} className={submitClass}/>
    </button>
  );
};