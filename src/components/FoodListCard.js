import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFoodById } from "../ducks/foodsDuck";

const FoodListCard = ({ id, foodName, foodDetails, deleteFoodById }) => {
  return (
    <div>
      <h6>{id}</h6>
      <h5>{foodName}</h5>
      <h5>{foodDetails}</h5>
      <Link to={`/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <br />
      <button onClick={() => deleteFoodById(id)}>Delete</button>
    </div>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { deleteFoodById };

export default connect(mapStateToProps, mapDispatchToProps)(FoodListCard);
