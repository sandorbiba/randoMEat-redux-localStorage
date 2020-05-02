import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Random } from "./pages/Random";
import { FoodControll } from "./pages/FoodControll";
import { EditFood } from "./components/EditFood";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/random" component={Random} />
        <Route path="/foods" component={FoodControll} />
        <Route path="/:id/edit" component={EditFood} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
