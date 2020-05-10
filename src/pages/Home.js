import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Typical from "react-typical";

export const Home = () => {
  return (
    <div className="center">
      <Typical
        steps={[
          "Hello 👋",
          1000,
          "I am react-typical",
          1000,
          "I can support emoji 👌",
          1000,
          "I can only delete what needs deleting",
          1000,
          "I can pause",
          4000,
          "I can loop",
          1000,
          "I can wait",
          3000,
          "I can vary typing speed",
          2000,
        ]}
        loop={Infinity}
        wrapper="h2"
        className={"padding"}
      />
      <div>
        <Link to="/random">randoMEat</Link>
      </div>
      <div>
        <Link to="/foods">Food List</Link>
      </div>
    </div>
  );
};
