import React from 'react';
import Cheese from "../assets/BaseCheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import BananaPepper from "../assets/BananaPepper.png";
import Sausage from "../assets/Sausage.png";
import Onion from "../assets/Onion.png";
import GreenPepper from "../assets/GreenPepper.png";
import Pepperoni from "../assets/Pepperoni.png";

export default function Customize({ingredients, setIngredients}) {
  
  const changeIngredients = (name) => {
    let newIngredients = JSON.parse(JSON.stringify(ingredients));
    //toggle the ingredient onto the pizza
    newIngredients[name] = !newIngredients[name];
    setIngredients(newIngredients);
  }

  return (
    <div style={{display: 'flex'}}>
      {JSON.stringify(ingredients)}
      <div style={{border:'2px solid black', flex:1}}>
        <div style={{maxHeight:500, maxWidth:500, position:'relative'}}>
          <img src={Base} alt="Pizza Base" height="100%" width="100%" />
          <img src={Cheese} alt="Cheese" height="100%" width="100%" />
          <img src={Olive} alt="Olive" height="100%" width="100%" className="ingredients"/>
          <img src={Pineapple} alt="Pineapple" height="100%" width="100%" className="ingredients"/>
          <img src={Mushroom} alt="Mushroom" height="100%" width="100%" className="ingredients"/>
          <img src={Basil} alt="Basil" height="100%" width="100%" className="ingredients"/>
          <img src={Tomato} alt="Tomato" height="100%" width="100%" className="ingredients"/>
          <img src={BananaPepper} alt="Banana Pepper" height="100%" width="100%" className="ingredients"/>
          <img src={Sausage} alt="Sausage" height="100%" width="100%" className="ingredients"/>
          <img src={Onion} alt="Onion" height="100%" width="100%" className="ingredients"/>
          <img src={GreenPepper} alt="GreenPepper" height="100%" width="100%" className="ingredients"/>
          <img src={Pepperoni} alt="Pepperoni" height="100%" width="100%" className="ingredients"/>
        </div>
      </div>
      <div style={{border:'2px solid black', flex:2}}>
        <input type="checkbox" id="olive" name="olive" value="Olive" onChange={()=> changeIngredients('olive')}/>
        <label for="olive"> Olives </label>
      </div>
    </div>
  )
}