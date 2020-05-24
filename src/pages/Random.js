import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "../components/components";

const Container = styled.div`
  background-image: url("tick.png");
  background-position: center center;
  background-size: 60%;
  background-repeat: no-repeat;
  background-color: #dee0e6;
  min-height: 100vh;
  width: 100%;
`;

const RandomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PenguinContainer = styled.div``;

const Penguin = styled.img`
  max-width: 324px;
  margin-top: 40%;
`;

const FoodContainer = styled.div``;

const Sticker = styled.div`
  text-align: center;
  min-height: 300px;
  width: 400px;
  background-color: #fff490;
  color: black;
  padding: 20px;
  font-family: Satisfy;
  font-size: 18px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);
  transform: rotate(2deg);
  font-family: "Pangolin", cursive;
`;

const FoodNamePTag = styled.p`
  font-weight: bold;
  font-size: 22px;
`;

const FoodDetailsPTag = styled.p`
  margin-left: 3px;
  margin-right: 3px;
`;
const RandomText = styled.h1`
  font-family: "Ubuntu Mono", monospace;
`;

const GoBackContainer = styled.div`
  text-align: center;
  font-family: "Ubuntu Mono", monospace;
`;

const ButtonContainer = styled.div`
  margin-top: 35px;
  text-align: center;
`;

const RandomFood = ({ foodStore, history }) => {
  const random = foodStore[Math.floor(Math.random() * foodStore.length)];

  const [randomFood, setRandomFood] = useState(random);

  const resetRandom = () => {
    setRandomFood("");
    history.push("/");
  };

  return (
    <Container>
      {randomFood ? (
        <>
          <RandomContainer>
            <PenguinContainer>
              <Penguin src="/PENGUIN03.svg" alt="penguin" />
            </PenguinContainer>
            <FoodContainer>
              <RandomText>
                Your randoMEal for today
                <span aria-label="emoji" role="img">
                  👇🎉
                </span>
              </RandomText>
              <Sticker>
                <FoodNamePTag> {randomFood.foodName} </FoodNamePTag>
                <FoodDetailsPTag> {randomFood.foodDetails} </FoodDetailsPTag>
              </Sticker>
              <ButtonContainer>
                <Button primary onClick={() => resetRandom()}>
                  GO Back
                </Button>
              </ButtonContainer>
            </FoodContainer>
          </RandomContainer>
        </>
      ) : (
        <RandomContainer>
          <PenguinContainer>
            <Penguin src="/PENGUIN03.svg" alt="penguin" />
          </PenguinContainer>
          <GoBackContainer>
            <h1>
              <span aria-label="emoji" role="img">
                👈
              </span>
              Add your food and we save you from IDK
            </h1>
            <Button to="/foods">GO back</Button>
          </GoBackContainer>
        </RandomContainer>
      )}
    </Container>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(RandomFood);
