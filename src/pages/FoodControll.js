import React from "react";
import { Link } from "react-router-dom";

import { AddFood } from "../components/AddFood";
import { FoodList } from "../components/FoodList";

export const FoodControll = () => {
  return (
    <div>
      <AddFood />
      <FoodList />
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
