import React from "react";
import Places from "./Components/Places"
import PizzaForm from "./Components/PizzaForm"

const App = () => {

  return (
    <div className = "Home">
      <h1>Lambda Eats</h1>
      <p>It is always time for pizza</p>

      <button aref = {Places}> Resturants</button>
      <button aref = {PizzaForm}>Coder Fav</button>

    </div>
  );
};
export default App;
