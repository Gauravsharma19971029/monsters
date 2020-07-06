import React from "react";
import "./cards.component.css"

export const Cards = (props) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return (
    <div className="card-container">
      <img alt="user" src={`https://robohash.org/${props.user.id}?set=set2`}></img>
      <h1  >{props.user.name}</h1>
    </div>);
};

export default Cards;
