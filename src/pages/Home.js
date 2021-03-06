import React from "react";
import Typical from "react-typical";
import styled from "styled-components";
import { Button, Emoji } from "../components/components";

const HomeContainer = styled.div`
  text-align: center;
  background-image: url("question.png");
  background-color: #dee0e6;
  height: 100vh;
  padding-bottom: 10px;
  background-position: center center;
  background-size: 49%;
  background-repeat: no-repeat;
`;

const StyledTypical = styled(Typical)`
  margin: 0px;
  text-align: center;
  padding: 25px;
  padding-top: 35px;
  height: 40px;
`;

const BottomText = styled.h1`
  margin: 0px;
  padding: 20px;
  font-style: italic;
  padding-bottom: 0px;
  font-family: "Ubuntu Mono", monospace;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 58vh;
  position: relative;
  padding-top: 70px;
`;

const Penguin = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 424px;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <StyledTypical
        steps={[
          "Hello 👋",
          800,
          "R U looking for 👀 the answer ",
          800,
          "to the Ultimate Question of Life",
          800,
          "The Universe 💫 and Everything?",
          800,
          "It's not 42 it's RandoMEat! 💁",
          1200,
        ]}
        loop={Infinity}
        wrapper="h2"
      />
      <ButtonContainer>
        <Button to="/foods">collect MEals</Button>
        <Button primary to="/random">
          randoMEat
        </Button>
        <Penguin alt="penguin" src="/PENGUIN01.svg" />
      </ButtonContainer>
      <BottomText>
        "What do you want to eat, honey?"
        <Emoji aria-label="emoji" role="img">
          👩
        </Emoji>
      </BottomText>
    </HomeContainer>
  );
};
