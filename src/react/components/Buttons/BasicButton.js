import React from "react";
export const BasicButton = (props) => {
  const data = props.data
  const btnClass = data.btnClass
  const btnType = data.btnType
  const inputType = data.inputType
  const submitClass = data.submitClass

  return (
    <button type={btnType} className={btnClass || "btn addtocart-button"}>
      <input type={inputType || "submit"} className={submitClass}/>
    </button>
  );
};