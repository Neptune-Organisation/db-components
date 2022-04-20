import React from "react";
import {Link} from "../TextComponents/Link"
export const GotoButton = (props) => {
  const data = props.data
  const btnUrl = data.btnUrl
  const btnText = data.btnText
  return (
    <Link data = {data} />
  );
};
