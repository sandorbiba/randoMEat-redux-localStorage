import React from "react";
import { Link } from "react-router-dom";

export const FoodListCard = ({ id, foodName, foodDetails }) => {
  return (
    <div>
      <h6>{id}</h6>
      <h5>{foodName}</h5>
      <h5>{foodDetails}</h5>
      <Link to={`/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <br />
      <button>Delete</button>
    </div>
  );
};
