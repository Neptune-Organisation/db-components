import React from "react";
  
export const Footnote = (props) => {
  
    const data = props.data
    const groupTitle = data.groupTitle
    const groupTitleClass = data.groupTitleClass

  return(
      <p className={`${footnoteClass} || footnote`}>{footnote}</p>
  )
};