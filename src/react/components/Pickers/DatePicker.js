import {React} from "react";
import { SendButton } from "../Buttons/SendButton"

export const DatePicker = (props) => {

  const data = props.data
  const sendButton = data.sendButton
  
  return (
    <div className="date-picker">
      <input type="date" />
      <SendButton data =  {sendButton} />
    </div>
  );
};
