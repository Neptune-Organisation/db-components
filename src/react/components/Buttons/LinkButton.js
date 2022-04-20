import React from "react";
import {Link} from "../TextComponents/Link"

export const LinkButton = (props) => {
  const data = props.data
  const btnClass = data.btnClass
  const btnType = data.btnType

  return (
    <button type={btnType} className={btnClass || "btn link-button"}>
      <Link data = {data} />
    </button>
  );
};