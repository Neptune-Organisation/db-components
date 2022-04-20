import React from "react";
import { SendButton} from "../buttons/SendButton"

export const ColorPicker = (props) => {

  const data = props.data
  const sendButton = data.sendButton

  return (
    <div className="color-picker">
      <input type="color" />
      <SendButton data = {sendButton} />
    </div>
  );
};
