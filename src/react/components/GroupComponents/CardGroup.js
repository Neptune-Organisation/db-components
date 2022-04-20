import React from "react"
import { BasicCard } from "../Cards";

export const CardGroup = (props) => {
  const data = props.data
  const cards = data.cards;

  return (
    <div className="card-deck">
      {cards && cards.map((card) => (
        <BasicCard data = {card}/>
      ))}
    </div>
  );
};
