import React, { useState } from "react";
import { connect } from "react-redux";
import { createFood } from "../ducks/foodsDuck";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  SubmitButton,
  AddContainer,
  ButtonContainer,
  Input,
  InputText,
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
      <InputContainer onSubmit={saveFood}>
        <label>
          <Input
            value={food.foodName}
            onChange={updateFood}
            name="foodName"
            type="text"
            placeholder="Add your favorite 🍝 meal "
          />
        </label>
        <label>
          <InputText
            value={food.foodDetails}
            onChange={updateFood}
            name="foodDetails"
            type="text"
            placeholder="Ingredients 🥦 recipes 🍽️"
          />
        </label>
        <ButtonContainer>
          <Button to="/">GO Back</Button>
          <SubmitButton primary>Submit</SubmitButton>
        </ButtonContainer>
      </InputContainer>
    </AddContainer>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { createFood };
export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
