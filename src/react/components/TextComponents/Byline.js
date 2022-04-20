import React from "react";
  
export const Byline = (props) => {
  
    const data = props.data
    const byline = data.byline
    const bylineClass = data.bylineClass

  return(
      <p className={`${bylineClass} || byline`}>{byline}</p>
  )
};