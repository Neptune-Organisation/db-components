import React from "react";
import {ButtonGroup} from "../groupComponents/ButtonGroup";

export const BooleanModal = (props) => {
  const data = props.data
  const modalTitle = data.modalTitle
  const modalTxt = data.modalTxt
  const modalContainerClass = data.modalContainerClass
  const modalTitleClass = data.modalTitleClass
  const modalTxtClass = data.modalTxtClass



  return (
    <div className={modalContainerClass ||"modal__container"}>
      <h3 className={modalTitleClass || "modal__booleanTitle"}>{modalTitle}</h3>
      <p className={modalTxtClass ||"modal__booleanBody"}>{modalTxt}</p>
      <ButtonGroup data = {data} />
    </div>
  );
};
