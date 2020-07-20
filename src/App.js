import React from "react";
import Places from "./Components/Places"
import PizzaForm from "./Components/PizzaForm"

const App = () => {

  return (
    <div className = "Home">
      <h1>Lambda Eats</h1>
      <p>It is always time for pizza</p>

//I know I need to link these buttons to the Components
      <button aref = {Places}> Resturants</button>
      <button aref = {PizzaForm}>Pizza?</button>

    </div>
  );
};
export default App;
