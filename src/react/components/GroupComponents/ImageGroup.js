import React from "react";
import {Image} from "../MediaComponents/Image"
export const ImageGroup = (props) => {
  const data = props.data
  const imageGroupClass = data.imageGroupClass
  const images = data.images;

  return (
    <div className={imageGroupClass || "image-group"}>
      {images && images.map((image) => (<Image data = {image} />))}
    </div>
  );
};
