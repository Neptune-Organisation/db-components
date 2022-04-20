import React from "react";
import {ShareBar} from "../otherInteractions/ShareBar";

export const ShareModal = (props) => {
  const data = props.data
  const modalTitle = data.modalTitle;
  const modalTxt = data.modalTxt;
  const shareModalClass = data.shareModalClass
  const shareModalTitleClass = data.shareModalTitleClass
  const shareModalTxtClass = data.shareModalTxtClass
  

  return (
    <div className={shareModalClass || "modal__container"}>
      <h3 className={shareModalTitleClass || "modal__title"}>{modalTitle}</h3>
      <p className={shareModalTxtClass ||"modal__txt"}>{modalTxt}</p>
      <ShareBar data = {data} />
    </div>
  );
};
