import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editFoodById } from "../ducks/foodsDuck";

const EditFood = ({ editFoodById, foodStore, match, history }) => {
  const editedFoodId = match.params.id;

  const currentFood = foodStore.find(({ id }) => id === editedFoodId);

  const [food, setFood] = useState(currentFood);

  const saveFood = (event) => {
    event.preventDefault();
    editFoodById(food);
    history.push("/foods/");
  };

  const updateFood = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
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
      <Link to="/foods">
        <button>Back</button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { editFoodById };
export default connect(mapStateToProps, mapDispatchToProps)(EditFood);
