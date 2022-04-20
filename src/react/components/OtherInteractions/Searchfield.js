import React from "react";
import {Icons} from "../mediaComponents/Icons";
import {InputField} from "../inputs/InputField";
import {SendButton} from "../buttons/SendButton";

export const Searchfield = (props) => {

  const data = props.data
  const inputData = data.inputData
  const sendButtonData = data.sendButtonData
  const searchIconClass = data.searchIconClass
  
  return (
    <div className="search-field__container">
      <InputField data = {inputData} />
      <SendButton data = {sendButtonData} />
      <Icons.AiOutlineMinusCircle className={searchIconClass ||"iconSmall"} />
    </div>
  );
};
