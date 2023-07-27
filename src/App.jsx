import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [foods, setFoods] = useState(foodsJson);


  const deleteFood = (foodId) => {
    console.log("delete this food", foodId);
    const filteredFoods = foods.filter((filterFood) => {
      if (filterFood.id !== foodId) {
        return filterFood;
      }
    });
    console.log("filtered foods", filteredFoods);
    setFoods(filteredFoods);
  };
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((oneFood) => {
        return (
          <>
             <h3>{oneFood.name}</h3>
            {/*<img
              src={oneFood.image}
              alt={oneFood.name}
              style={({ height: "200px" }, { width: "200px" })}
            /> */}
            <FoodBox
              food={oneFood}
              onDelete={() => handleDeleteFood(oneFood.id)}
            />
            
          </>
        );
      })}
    </div>
  );
}

export default App;