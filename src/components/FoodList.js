import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFoods } from "../ducks/foodsDuck";
import FoodListCard from "./FoodListCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FoodList = ({ foodStore, getFoods }) => {
  useEffect(() => {
    if (foodStore.length === 0) {
      getFoods();
    }
  }, [foodStore.length, getFoods]);

  return (
    <Container>
      {foodStore.map(({ id, foodName, foodDetails }) => (
        <FoodListCard
          key={id}
          foodName={foodName}
          foodDetails={foodDetails}
          id={id}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { getFoods };

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
