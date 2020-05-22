import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFoodById } from "../ducks/foodsDuck";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff490;
  width: 170px;
  height: 170px;
  box-shadow: 0 10px 10px 2px rgba(0, 0, 1, 0.4);
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

  position: relative;
  border-bottom-right-radius: 80px 10px;

  /* ;
  height: 200px;
  
  color: black;
  padding: 20px;
  font-family: Satisfy;
  font-size: 15px; */
`;

const ButtonContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  top: 0;
`;
const ButtonContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  top: 0;
`;

const StickerButton = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  margin: 5px;


/*   color: #ffffff;
  background: ${(props) => (props.primary ? "#1ac0c6" : "#ff6150")};
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  display: inline-block;
  min-width: 60px;
  font-size: 14px;
  font-weight: bold;
  height: 18px;
  z-index: 10;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 1, 0.4);
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 1, 0.5);
    transition: all 0.2s ease-in-out;
  } */
`;

const FoodListCard = ({ id, foodName, foodDetails, deleteFoodById }) => {
  return (
    <Card>
      <h4>{foodName}</h4>
      <p>{foodDetails}</p>
      <ButtonContainerLeft>
        <Link to={`/${id}/edit`}>
          <StickerButton primary>
            <span aria-label="emoji" role="img">
              🔧
            </span>
          </StickerButton>
        </Link>
      </ButtonContainerLeft>
      <ButtonContainerRight>
        <StickerButton onClick={() => deleteFoodById(id)}>
          <span aria-label="emoji" role="img">
            ❌
          </span>
        </StickerButton>
      </ButtonContainerRight>
    </Card>
  );
};

const mapStateToProps = ({ foodStore }) => ({ foodStore });
const mapDispatchToProps = { deleteFoodById };

export default connect(mapStateToProps, mapDispatchToProps)(FoodListCard);
