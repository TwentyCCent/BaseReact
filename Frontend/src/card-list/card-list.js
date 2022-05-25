import React from "react";

import "./card-list.css";

import Card from "../card/card";

const CardList = props => (
  <div className="card-list">
    {props.oeuvres.map((oeuvre) => (
      <Card key={oeuvre.id} oeuvre={oeuvre} onDelete={props.onDeleteItem} route={props.route}/>
    ))}
  </div>
);

export default CardList;
