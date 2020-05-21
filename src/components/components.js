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
