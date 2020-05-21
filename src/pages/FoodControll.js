import React from "react";
import { Link } from "react-router-dom";
import AddFood from "../components/AddFood";
import FoodList from "../components/FoodList";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("bckgrnd.svg");
  background-color: #dee0e6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FoodControll = () => {
  return (
    <Container>
      <AddFood />
      <FoodList />
      <Link to="/">
        <button>Back</button>
      </Link>
    </Container>
  );
};
