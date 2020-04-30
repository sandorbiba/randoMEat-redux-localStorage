import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Random } from "./pages/Random";
import { FoodControll } from "./pages/FoodControll";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/random" component={Random} />
        <Route path="/foods" component={FoodControll} />
      </Switch>
    </Router>
  );
}

export default App;
