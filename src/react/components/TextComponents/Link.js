import React from "react";
  

export const Link = (props) => {
  const data = props.data
  const linkUrl = data.linkUrl
  const linkTxt = data.linkTxt;
  const linkClass = data.linkClass
  const linkTarget = data.linkTarget || "_self"

  return(
      <a href={linkUrl} className={linkClass} target = {`${linkTarget} || _self`} >{linkTxt}</a>
  )
};
