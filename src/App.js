import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Customize from "./components/Customize";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [ingredients] = useState
  ({
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
    bananaPepper: false,
    sausage: false,
    onion: false,
    greenPepper: false,
    pepperoni: false
  });
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route path="/checkout">
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
