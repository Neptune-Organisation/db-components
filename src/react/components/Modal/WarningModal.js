import React from "react";
import {ButtonGroup} from "../groupComponents/ButtonGroup";

export const WarningModal = (props) => {
  const data = props.data
  const modalClassName = data.modalClassName
  const modalTitle = data.modalTitle
  const modalTxt = data.modalTxt

  return (
    <div className={`${modalClassName}`}>
      <h3 className={modalTitleClass || "modal__title"}>{modalTitle}</h3>
      <p className={modalTxtClass || "modal__text"}>{modalTxt}</p>
      <ButtonGroup data = {data} />
    </div>
  );
};