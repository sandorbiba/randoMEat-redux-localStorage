import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFoods } from "../ducks/foodsDuck";
import FoodListCard from "./FoodListCard";

const FoodList = ({ foodStore, getFoods }) => {
  useEffect(() => {
    if (foodStore.length === 0) {
      getFoods();
    }
  }, [foodStore.length, getFoods]);

  return (
    <div>
      <hr />
      <h2>This is your FoodList</h2>
      {foodStore.map(({ id, foodName, foodDetails }) => (
        <FoodListCard
          key={id}
          foodName={foodName}
          foodDetails={foodDetails}
          id={id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { getFoods };

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
