import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFoodById } from "../ducks/foodsDuck";
import styled from "styled-components";

/* colors
#ffa5f0
#ffa5ff
#FDF21C
#a5caff 
 */

const Card = styled.div`
  background-color: ${(props) => (props.bgcolor ? "#a5caff " : "#fff490")};
  min-width: 220px;
  max-width: 240px;
  min-height: 200px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 1, 0.4);
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  border-bottom-right-radius: 80px 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0px;
  top: 0px;
`;

const FoodNamePTag = styled.p`
  margin-top: 25px;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 17px;
  font-family: "Pangolin", cursive;
`;

const FoodDetailsPTag = styled.p`
  margin-top: 5px;
  margin-left: 3px;
  margin-right: 3px;
  font-family: "Pangolin", cursive;
`;

const StickerButton = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  &:hover {
    transform: translateY(2px);
  }
  &:active {
    transform: translateY(4px);
  }
  &:focus {
    outline: 0;
  }
`;

const FoodListCard = ({ id, foodName, foodDetails, deleteFoodById }) => {
  return (
    <Card bgcolor={Math.round(Math.random())}>
      <FoodNamePTag>{foodName}</FoodNamePTag>
      <FoodDetailsPTag>{foodDetails}</FoodDetailsPTag>
      <ButtonContainer>
        <Link to={`/${id}/edit`}>
          <StickerButton primary>
            <img src="/create.svg" alt="edit" />
          </StickerButton>
        </Link>
        <StickerButton onClick={() => deleteFoodById(id)}>
          <img src="/delete.svg" alt="delete" />
        </StickerButton>
      </ButtonContainer>
    </Card>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { deleteFoodById };

export default connect(mapStateToProps, mapDispatchToProps)(FoodListCard);
