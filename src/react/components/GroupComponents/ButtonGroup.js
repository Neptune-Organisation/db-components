import React from "react";
import {FileButton} from "../buttons/FileButton";
import {LinkButton} from "../buttons/LinkButton";
import {QuantityButton} from "../buttons/QuantityButton";
import {SendButton} from "../buttons/SendButton";

export const ButtonGroup = (props) => {
  const data = props.data
  const buttons = data.buttons;
  const btnType = data.btnType
  let renderedBtn;

  const buttonType = () => {
    if (btnType === "FileButton") {
      renderedBtn = <FileButton data = {data} />;
    } else if (btnType === "LinkButton") {
      renderedBtn = <LinkButton data = {data} />;
    } else if (btnType === "QuantityButton") {
      renderedBtn = <QuantityButton data = {data} />;
    } else if (btnType === "SendButton") {
      renderedBtn = <SendButton data = {data} />;
    }
  };

  return (
    <div className="button-group">
      {buttons &&
        buttons.map((button) => (
          <button type={btnType} className={`${button.class} || defaultButton`} link={props.link} image = {props.image}>
            {button.text}
          </button>
        ))}
    </div>
  );
};