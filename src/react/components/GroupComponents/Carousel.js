import React from "react";
import { Image } from "../MediaComponents/Image"
export const Carousel = (props) => {
  const data = props.data
  const images = data.mediaUrls;

  return (
    <div className="carousel__container">
      {images &&
        images.map((image) => (
          <Image data = {image} />
        ))}
      <div className="carousel__dots-container">
        <div className="carousel__dot"></div>
        <div className="carousel__dot"></div>
        <div className="carousel__dot"></div>
      </div>
    </div>
  );
};
