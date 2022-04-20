import React from "react";
export const InputField = (props) => {
  const data = props.data
  const containerClass = data.containerClass
  const htmlLabel = data.htmlLabel
  const inputLabel = data.inputLabel
  const labelClass = data.labelClass
  const inputType = data.inputType
  const inputClass = data.inputClass
  const minLength = data.minLength
  const maxLength = data.maxLength
  const required = data.required


  return (
    <div className={`${containerClass} || default-input`}>
      <label
        htmlFor={htmlLabel}
        className={`${labelClass} || default-input__label`}
      >
        {inputLabel}
        <input
          inputType={inputType}
          className={`${inputClass} || default-input__input`}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
        />
      </label>
    </div>
  );
};
