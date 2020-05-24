import React from "react";
import { connect } from "react-redux";
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
  font-family: "Ubuntu Mono", monospace;
`;

const FoodList = ({ foodStore }) => {
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
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
