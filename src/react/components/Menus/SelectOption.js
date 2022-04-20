import React from "react";
export const SelectOption = (props) => {
  
  const data = props.data
  const optionValue = data.optionValue
  const optionTxt = data.optionTxt
  return (
    <option value={optionValue}>{optionTxt}</option>
  );
};