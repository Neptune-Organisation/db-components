import React from "react";
export const FileButton = (props) => {
  const data = props.data
  const btnClass = data.btnClass
  const submitClass = data.submitClass

  return (
    <button type={type} className={btnClass || "btn addtocart-button"}>
      <input type="submit" className={submitClass || "fileButton"}/>
    </button>
  );
};