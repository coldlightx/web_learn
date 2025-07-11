import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  const ingredientItems = ingredients.map((item) => <li key={item}>{item}</li>);

  function onSubmit(event) {
    event.preventDefault();
    console.log("form submitted.");
    const data = new FormData(event.currentTarget);
    const newingredient = data.get("ingredient");
    setIngredients((prev) => [...prev, newingredient]);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <input type="text" placeholder="e.g. oregano" name="ingredient" />
        <button
          onMouseEnter={() => {
            console.log("mouse enter");
          }}
          onMouseOver={() => {
            console.log("mouse over");
          }}
          onMouseLeave={() => {
            console.log("mouse leave");
          }}
        >
          + Add ingredient
        </button>
      </form>
      <div>
        <h1>Ingredients</h1>
        <ul>{ingredientItems}</ul>
      </div>
    </>
  );
}
