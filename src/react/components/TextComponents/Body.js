import React from "react";
  
export const Body = (props) => {
  
    const data = props.data
    const body = data.body
    const bodyClass = data.bodyClass

  return(
      <p className={`${bodyClass} || body`}>{body}</p>
  )
};