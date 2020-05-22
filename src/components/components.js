import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  color: #ffffff;
  background: ${(props) => (props.primary ? "#1ac0c6" : "#ff6150")};
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  min-width: 120px;
  font-size: 17px;
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

export const AddContainer = styled.div`
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 587px;
`;

export const Input = styled.input`
  display: block;
  padding: 15px;
  margin: 20px;
  border: none;
  outline: none;
  background: none;
  background-color: #eee;
  border-radius: 8px;
  color: #53565a;
  font-size: 20px;
  font-weight: 300;
  transition: 0.4s ease-out;
  margin-left: auto;
  margin-right: auto;
  width: 80vh;
  height: ${(props) => (props.primary ? "23px" : "100px")};
  &:focus {
    box-shadow: 0px 0px 6px 3px #1ac0c6;
  }
`;

export const InputContainer = styled.form`
  margin-top: 30px;
`;

export const Penguin = styled.img`
  position: fixed;
  top: 35vh;
  right: 10px;
  max-width: 274px;
`;
