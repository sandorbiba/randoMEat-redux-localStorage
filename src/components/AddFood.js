import React, { useState } from "react";
import { connect } from "react-redux";
import { createFood } from "../ducks/foodsDuck";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./components";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Input = styled.input`
  display: block;
  padding: 15px;
  margin: 20px;
  border: none;
  outline: none;
  background: none;
  background-color: #eee;
  border-radius: 8px;
  color: #53565a;
  font-size: 20px;
  font-weight: 300;
  transition: 0.4s ease-out;
  margin-left: auto;
  margin-right: auto;
  width: 80vh;
  &:focus {
    box-shadow: 0px 0px 6px 3px #1ac0c6;
  }
`;

const InputContainer = styled.form`
  margin-top: 30px;
`;

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
    <Container>
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
          <Input
            value={food.foodDetails}
            onChange={updateFood}
            name="foodDetails"
            type="text"
            placeholder="Ingredients 🥦 recipes 🍽️"
          />
        </label>
        <Button primary>Submit</Button>
      </InputContainer>
    </Container>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { createFood };
export default connect(mapStateToProps, mapDispatchToProps)(AddFood);
