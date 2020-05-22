import React, { useState } from "react";
import { connect } from "react-redux";
import { createFood } from "../ducks/foodsDuck";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  AddContainer,
  ButtonContainer,
  Input,
  InputContainer,
} from "./components";

const AddFood = ({ foodStore, createFood }) => {
  const [food, setFood] = useState({
    foodName: "",
    foodDetails: "",
  });

  const saveFood = (e) => {
    createFood({ ...food, id: uuidv4() });
    e.preventDefault();
  };

  const updateFood = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AddContainer>
      <InputContainer type="submit" onSubmit={saveFood}>
        <label>
          <Input
            value={food.foodName}
            onChange={updateFood}
            name="foodName"
            type="text"
            placeholder="Add your favorite 🍝 meal "
            primary
          />
        </label>
        <label>
          <Input
            value={food.foodDetails}
            onChange={updateFood}
            name="foodDetails"
            type="text"
            placeholder="Ingredients 🥦 recipes 🍽️"
          />
        </label>
        <ButtonContainer>
          <Button to="/">GO Back</Button>
          <Button primary>Submit</Button>
        </ButtonContainer>
      </InputContainer>
    </AddContainer>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { createFood };
export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
