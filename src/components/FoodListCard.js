import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFoodById } from "../ducks/foodsDuck";
import styled from "styled-components";

const CardContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  text-align: center;
  height: 200px;
  background-color: #fff490;
  color: black;
  padding: 20px;
  font-family: Satisfy;
  font-size: 15px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled.div`
  margin-top: 45%;
`;

const StickerButton = styled(Link)`
  color: #ffffff;
  background: ${(props) => (props.primary ? "#1ac0c6" : "#ff6150")};
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  display: inline-block;
  min-width: 60px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  height: 18px;
  z-index: 10;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 1, 0.4);
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 1, 0.5);
    transition: all 0.2s ease-in-out;
  }
`;

const FoodListCard = ({ id, foodName, foodDetails, deleteFoodById }) => {
  return (
    <CardContainer>
      <h5>{foodName}</h5>
      <h5>{foodDetails}</h5>
      <ButtonContainer>
        <Link to={`/${id}/edit`}>
          <StickerButton primary>Edit</StickerButton>
        </Link>
        <StickerButton onClick={() => deleteFoodById(id)}>Delete</StickerButton>
      </ButtonContainer>
    </CardContainer>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { deleteFoodById };

export default connect(mapStateToProps, mapDispatchToProps)(FoodListCard);
