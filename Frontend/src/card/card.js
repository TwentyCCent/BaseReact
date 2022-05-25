import React from "react";
import { NavLink } from "react-router-dom";

import "./card.css";

const Card = (props) => {
  const confirmDeleteHandler = async () => {
    try {
      fetch(`http://localhost:5000/api/${props.route}/${props.oeuvre.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        console.log(error);
      });
      props.onDelete(props.oeuvre.id);
    } catch (err) {}
  };

  return (
    <div className="card-container">
      <img
        alt="Oeuvre"
        className="image"
        // width="200px"
        src={props.oeuvre.imageUrl}
      />
      <h2>{props.oeuvre.titre}</h2>
      <p>
        {props.oeuvre.auteur} - {props.oeuvre.annee}
      </p>
      <div className="card-item__actions">
        <ul>
          <li>
          <button><NavLink to={`/${props.route}/${props.oeuvre.id}`}>Editer</NavLink></button>
          </li>
          <li>
            <button onClick={confirmDeleteHandler}>Supprimer</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
