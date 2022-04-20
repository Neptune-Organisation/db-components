import React from "react";
  
export const Subheadline = (props) => {
  
    const data = props.data
    const subHeadline = data.subHeadline
    const subHeadlineClass = data.subHeadlineClass

  return(
      <h5 className={`${subHeadlineClass} || subheadline`}>{subHeadline}</h5>
  )
};