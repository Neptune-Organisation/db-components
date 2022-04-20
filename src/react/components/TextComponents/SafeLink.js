import React from "react";
import { FabianLink } from "../Buttons/FabianLink";

export const Link = (props) => {
  const data = props.data;

  return (
    <FabianLink
      url={data.linkUrl}
      txt={data.linkTxt}
      localClass={data.linkClass}
      target={data.linkTarget}
    />
  );
};
