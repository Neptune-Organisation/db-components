import React from "react";
import {InputField} from "../Inputs/InputField";
import {SendButton} from "../buttons/SendButton";

export const BasicForm = (props) => {

  const data = props.data
  const formTitle = data.formTitle
  const formTitleClass = data.formTitleClass
  const formFields = data.formFields
  const formClass = data.containerClass
  const txtAreaName = data.txtAreaName
  const txtAreaId = data.txtAreaId
  
  return (
    <div className={`${formClass} || "default-form contact-form__container"`}>
      <h1 className={formTitleClass}>{`${formTitle} || Your Order`}</h1>
      {formFields.map((field) => (
          <InputField data = {field} />
        ))}
      {txtAreaName && (
        <txtarea
          name={txtAreaName}
          id={txtAreaId}
          maxLength={1000}
        ></txtarea>
      )}
      <SendButton data = {data} />
    </div>
  );
};