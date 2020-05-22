import React from "react";
import AddFood from "../components/AddFood";
import FoodList from "../components/FoodList";
import styled from "styled-components";
import { Penguin } from "../components/components";

const Container = styled.div`
  background-image: url("bckgrnd.svg");
  background-color: #dee0e6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FoodControll = () => {
  return (
    <Container>
      <Penguin alt="penguin" src="/PENGUIN02.svg" />
      <AddFood />
      <FoodList />
    </Container>
  );
};
