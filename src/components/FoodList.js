import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getFoods } from "../ducks/foodsDuck";
import FoodListCard from "./FoodListCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 750px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const BottomText = styled.h1`
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  text-align: center;
`;

const FoodList = ({ foodStore, getFoods }) => {
  useEffect(() => {
    if (foodStore.length === 0) {
      getFoods();
    }
  }, [foodStore.length, getFoods]);

  return (
    <Container>
      <BottomText>
        Just collect your MEals and thank me later
        <span aria-label="emoji" role="img">
          👌
        </span>
      </BottomText>
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
