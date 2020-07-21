import {Route} from "react-router-dom"
import React from "react";
import Places from "./Components/Places"
import PizzaForm from "./Components/PizzaForm"

const App = () => {

  return (
    <div className = "Home">
      <h1>Lambda Eats</h1>
      <p>It is always time for pizza</p>
      let routes = 
      <Route path = {Places} > Resturants</Route>
      <Route Route path = {PizzaForm} >Pizza?</Route>

    </div>
  );
};
export default App;

//I know I need to link these buttons to the Components
