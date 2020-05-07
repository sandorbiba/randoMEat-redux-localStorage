import React, { useState } from "react";
import { connect } from "react-redux";
import { createFood } from "../ducks/foodsDuck";

const AddFood = ({ foodStore, createFood }) => {
  const [food, setFood] = useState({
    foodName: "",
    foodDetails: "",
  });

  const saveFood = (e) => {
    createFood(food);
    e.preventDefault();
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

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { createFood };
export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
