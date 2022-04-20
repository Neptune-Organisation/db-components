import React from "react";
export const SendButton = (props) => {
  const data = props.data
  const btnClass = data.btnClass
  const btnType = data.btnType

  return (
    <button type={btnType} className={btnClass || "btn send-button"}>
      <input type= {btnType || "submit"}/>
    </button>
  );
};