import React from "react";
import { Link } from "react-router-dom";

export const EditFood = ({ match }) => {
  return (
    <div>
      {match.params.id}
      <Link to="/foods">
        <button>Back</button>
      </Link>
    </div>
  );
};
