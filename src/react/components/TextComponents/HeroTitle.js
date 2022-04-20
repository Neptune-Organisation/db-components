import React from "react";
  
export const HeroTitle = (props) => {
  
    const data = props.data
    const herotitle = data.herotitle

  return(
      <h1>{herotitle}</h1>
  )
};