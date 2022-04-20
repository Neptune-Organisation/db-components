import React from "react";
import { SendButton } from "../buttons/SendButton"

export const Slider = (props) => {

  const data = props.data
  const minRange = data.minRange
  const maxRange = data.maxRange
  const sendButton = data.sendButton

  return (
    <div className="slider">
      <input type="range" min={minRange} max={maxRange} />
      <SendButton data = {sendButton} />
    </div>
  );
};
