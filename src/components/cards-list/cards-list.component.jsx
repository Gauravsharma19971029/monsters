import React from "react";
import "./cards-list.component.css";
import Cards from "../cards/cards.component";


export const CardList = props => (
  <div className="card-list">
    {

      props.users.filter(user => (user.name.includes(props.searchElement))).map((user, index) => (
        <Cards key={index} user={user}>

        </Cards>
      ))
    }

  </div>

);

export default CardList;
