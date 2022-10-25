import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function SpellCard({ props, handleFavClick, favSpell }) {
  return (
    <Card>
      <Card.Header>
        <div className="d-flex justify-content-between">
          <Link to={"/spell/" + props.index} className="card-link">
            {props.name}
          </Link>
          {props.isFav ? (
            <AiFillHeart
              color="#0d6efd"
              onClick={() => handleFavClick(props)}
            />
          ) : (
            <AiOutlineHeart onClick={() => handleFavClick(props)} />
          )}
        </div>
      </Card.Header>
    </Card>
  );
}

export default SpellCard;
