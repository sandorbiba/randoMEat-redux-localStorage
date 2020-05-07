import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editFoodById } from "../ducks/foodsDuck";

const EditFood = ({ editFoodById, foodStore, match }) => {
  const editedFoodId = match.params.id;

  /* const index = foodStore
    .map((e) => {
      return e.id;
    })
    .indexOf(editedFoodId); */

  /*   const index = foodStore.map((editedFood) => {
    const idx = editedFood.id.toString();
    if (idx === editedFoodId) {
      return idx;
    }
    return console.log("alma");
  }); */

  /*   const index = foodStore.map((editedFood, i) => {
    const idx = editedFood.id.toString();
    if (idx[i] === editedFoodId) {
      return editedFood[i];
    }
    return console.log("alma");
  });
 */

  /* const index = _.findIndex(parcels, function(parcel) {
  return parcel.id.toString() === id;
}); */

  const index = foodStore.map((items) => {
    if (
      items.findIndex(
        (foodStore,
        function (item) {
          return item.id.toString() === editedFoodId;
        })
      )
    ) {
      return items;
    }
    return console.log("alma");
  });

  console.log("index", index);

  const [food, setFood] = useState({
    foodName: editedFoodId && foodStore[index] ? foodStore[index].foodName : "",
    foodDetails:
      editedFoodId && foodStore[index] ? foodStore[index].foodDetails : "",
    id: editedFoodId && foodStore[index] ? foodStore[index].id : "",
  });

  const saveFood = (event) => {
    event.preventDefault();
    editFoodById(food.id);
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
