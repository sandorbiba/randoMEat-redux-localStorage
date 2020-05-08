import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFoods } from "../ducks/foodsDuck";

const RandomFood = ({ foodStore, getFoods, history }) => {
  const random = foodStore[Math.floor(Math.random() * foodStore.length)];

  const [randomFood, setRandomFood] = useState(random);

  useEffect(() => {
    if (foodStore.length === 0) {
      getFoods();
    }
  }, [foodStore.length, getFoods]);

  const resetRandom = () => {
    setRandomFood("");
    history.push("/");
  };

  return (
    <div>
      {randomFood ? (
        <div>
          <h2>No more IDK</h2>
          <h3>This is your Food</h3>
          <p> {randomFood.foodName} </p>
          <p> {randomFood.foodDetails} </p>
          <button onClick={() => resetRandom()}>Back</button>
        </div>
      ) : (
        <Link to="/foods">
          <button>Add your food and we save you from IDK</button>
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { getFoods };

export default connect(mapStateToProps, mapDispatchToProps)(RandomFood);
