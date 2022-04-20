import React from "react";

export const PersonalCard = (props) => {

  const data = props.data;
  const cardClass = data.cardClass;
  const fName = data.fName;
  const lName = data.lName;
  const personPosition = data.personPosition;
  const cardPositionClass = data.cardPositionClass;
  const imgUrl = data.imgUrl;
  const imgAlt = data.imgAlt;
  const imgClass = data.imgClass;

  return (
    <div className="card">
      <h3 className={cardClass || "card__tittle"}>
        {fName} {lName}
      </h3>
      <p className={cardPositionClass}>{personPosition}</p>
      <img src={imgUrl} alt={imgAlt} className={imgClass} />
    </div>
  );
};