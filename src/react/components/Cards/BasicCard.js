import React from "react";

export const BasicCard = (props) => {
  const data = props.data
  
  const cardClass = data.cardClass
  const imgUrl = data.imgUrl;
  const imgClass = data.imgClass
  const imgAlt = data.imgAlt
  const cardTitle = data.cardTitle;
  const titleClass = data.titleClass
  const fName = data.fName
  const lName = data.lName
  const nameClass = data.nameClass
  const personPosition = data.personPosition
  const personPositionClass = data.personPositionClass
  const bodyClass = data.bodyClass
  const cardBody = data.cardBody

  return (
    <div className={`${cardClass} || card`}>
      <img src={imgUrl} className={imgClass} alt={imgAlt}/>
      <div className="">
        {cardTitle && <h3 className={`${titleClass} || card__title`}>{cardTitle}</h3>}
        {fName && <h3 className={nameClass}>{fName} {lName}</h3>}
      </div>
      <p className={personPositionClass}>{personPosition}</p>
      <p className={bodyClass}>{cardBody}</p>
    </div>
  );
};