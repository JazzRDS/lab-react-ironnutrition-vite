// Your code here
import { useState } from "react";
import { deleteFood } from "/src/app.jsx";
function FoodBox(food) {
    const { name, calories, image, servings } = food;
    const totalCalories = servings * calories;
    return (
      <>
        <p>{food.name}</p>
        <img src={food.image} style={{ height: 200, width: 200 }} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b>
          kcal
        </p>
        <button onClick={onDelete}>Delete</button>
      </>
    );
  }
  
  export default FoodBox;