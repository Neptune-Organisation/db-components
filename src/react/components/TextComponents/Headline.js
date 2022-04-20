import React from "react";
  
export const Headline = (props) => {
  
    const data = props.data
    const headline = data.headline
    const headlineClass = data.headlineClass

  return(
      <h4 className={`${headlineClass} ||headline`}>{headline}</h4>
  )
};
