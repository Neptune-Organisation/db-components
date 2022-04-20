import React from "react";
  
export const FabianLink = (props) => {
  const url = props.url
  const txt = props.txt;
  const localClass = props.localClass
  const target = props.target || "_self"

  return(
      <a href={url} className={localClass} target = {`${target} || _self`} >{txt}</a>
  )
};
