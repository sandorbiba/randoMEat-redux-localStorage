import React from "react";
import { Link } from "react-router-dom";

export const Random = () => {
  return (
    <div>
      <div>Random</div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
