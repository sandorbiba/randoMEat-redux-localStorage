import React, { useState } from "react";

export const AddFood = () => {
  const [food, setFood] = useState({
    foodName: "",
    foodDetails: "",
  });

  const saveFood = (e) => {
    e.preventDefault();
    console.log(food.foodName, food.foodDetails);
  };

  const updateFood = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={saveFood}>
      <label>
        Food name:
        <input
          value={food.foodName}
          onChange={updateFood}
          name="foodName"
          type="text"
        />
      </label>
      <br />
      <label>
        List of ingredients / recipe:
        <input
          value={food.foodDetails}
          onChange={updateFood}
          name="foodDetails"
          type="text"
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};
