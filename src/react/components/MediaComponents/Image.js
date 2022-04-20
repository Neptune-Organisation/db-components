import React from "react";
export const Image = (props) => {
  const data = props.data
  const imgUrl = data.imgUrl
  const imgAlt = data.imgAlt
  const imgClass = data.imgClass
  
  return <img src={imgUrl} alt={imgAlt} className = {imgClass} />;
};
