import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  color: #ffffff;
  background: ${(props) => (props.primary ? "#1ac0c6" : "#ff6150")};
  padding: 20px;
  border-radius: 8px;
  display: inline-block;
  min-width: 120px;
  font-weight: bold;
  text-decoration: none;
  height: 18px;
  z-index: 10;
`;
