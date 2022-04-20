import React from "react";
import { List } from "../textComponents/List"

export const Breadcrumb = (props) => {
  const data = props.data
  const breadcrumbList = data.breadcrumbList

  return (
    <div>
      <List data = { breadcrumbList } />
    </div>
  );
};
