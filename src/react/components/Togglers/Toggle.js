import { useState } from "react";
export const Toggle = () => {
  
    const [toggleClass, setToggleClass] = useState("toggle__rest");

    const updateToggleClass = () => {
      toggleClass === "toggle__rest"
        ? setToggleClass("toggle__active")
        : setToggleClass("toggle__rest");
    };
    
    return (
        <div className={toggleClass} onClick={updateToggleClass}>
          <div className={`${toggleClass}__btn`}></div>
        </div>
      );
}