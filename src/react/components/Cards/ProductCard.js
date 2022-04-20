import React from "react";
import {QuantityButton} from "../buttons/QuantityButton";
import {Icons} from "../MediaComponents/Icons";
import {SendButton} from "../buttons/SendButton";

export const ProductCard = (props) => {
  const data = props.data
  const cardTitle = data.cardTitle;
  const byline = data.byline;
  const productPrice = data.productPrice;
  const imgUrl = data.imgUrl;
  const cardClass = data.cardClass
  const imgClass = data.imgClass
  const titleClass = data.titleClass

  return (
    <div className={`${cardClass} || card`}>
      <img src={imgUrl} className={imgClass}/>
      <h3 className={`${titleClass} || card__tittle`}>{cardTitle}</h3>
      <p>by {`${byline}`}</p>
      <p className="card__text">
        {productPrice} <Icons.BiEuro />
      </p>
      <QuantityButton data = {data} />
      <SendButton data = {data}/>
    </div>
  );
};