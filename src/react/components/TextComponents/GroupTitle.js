import React from "react";
  
export const GroupTitle = (props) => {
  
    const data = props.data
    const groupTitle = data.groupTitle
    const groupTitleClass = data.groupTitleClass

  return(
      <h4 className={`${groupTitleClass} || group-title`}>{groupTitle}</h4>
  )
};