import React from "react";
  
export const Blockquote = (props) => {
  
    const data = props.data
    const blockquote = data.blockquote
    const blockquoteClass = data.blockquoteClass

  return(
      <p className={`${blockquoteClass} || blockquote`}>{blockquote}</p>
  )
};