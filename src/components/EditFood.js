import React, { useState } from "react";
import { connect } from "react-redux";
import { editFoodById } from "../ducks/foodsDuck";
import {
  Button,
  SubmitButton,
  AddContainer,
  ButtonContainer,
  Input,
  InputText,
  InputContainer,
  Penguin,
} from "./components";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("plus.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 75%;
  background-color: #dee0e6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

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
    <Container>
      <Penguin alt="penguin" src="/PENGUIN02.svg" />
      <AddContainer>
        <InputContainer type="submit" onSubmit={saveFood}>
          <label>
            <Input
              value={food.foodName}
              onChange={updateFood}
              name="foodName"
              type="text"
              primary
            />
          </label>
          <label>
            <InputText
              value={food.foodDetails}
              onChange={updateFood}
              name="foodDetails"
              type="text"
            />
          </label>
          <ButtonContainer>
            <Button to="/foods">GO Back</Button>
            <SubmitButton primary>Submit</SubmitButton>
          </ButtonContainer>
        </InputContainer>
      </AddContainer>
    </Container>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { editFoodById };
export default connect(mapStateToProps, mapDispatchToProps)(EditFood);
