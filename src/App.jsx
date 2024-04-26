import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header"
import Card from "./card/Card";
import Students from "./props/Students";
import UserGreeting from "./conditional_rendering/UserGreeting";
import List from "./list/List"
import Button from "./click_event/Button";
import MyComponent from "./state/MyComponent";
import { useState } from "react";
import ComponentChange from "./onChange_event/ComponentChange";
import MyUpdater from "./updater_function/MyUpdated";

function App() {

  return (
      <MyUpdater />
  );
}

export default App



/*
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}];

  const veg =     [{id: 6, name: "broccli", calories: 68}, 
                  {id: 7, name: "celery", calories: 55}, 
                  {id: 8, name: "carrot", calories: 75}, 
                  {id: 9, name: "potatoes", calories: 110}, 
                  {id: 10, name: "corn", calories: 63}];

  <List items={fruits} category="fruits"/>
  <List items={veg} category="Vegetables"/>
*/