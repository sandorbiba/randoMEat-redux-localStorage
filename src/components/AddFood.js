import React, { useState } from "react";

export const AddFood = () => {
  const [foodName, setFoodName] = useState("");
  const [foodDetails, setFoodDetails] = useState("");

  const SaveFood = (e) => {
    e.preventDefault();
    console.log(foodName, foodDetails);
  };

  return (
    <form onSubmit={SaveFood}>
      <label>
        Food name:
        <input
          value={foodName}
          onChange={(event) => setFoodName(event.target.value)}
          name="foodname"
          type="text"
        />
      </label>
      <br />
      <label>
        List of ingredients / recipe:
        <input
          value={foodDetails}
          onChange={(event) => setFoodDetails(event.target.value)}
          name="fooddetails"
          type="longtext"
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};
