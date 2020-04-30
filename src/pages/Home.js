import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Home = () => {
  return (
    <div>
      <div>
        <Link to="/random">randoMEat</Link>
      </div>
      <div>
        <Link to="/foods">Food List</Link>
      </div>
    </div>
  );
};
