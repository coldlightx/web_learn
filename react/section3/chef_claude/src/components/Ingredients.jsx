export default function Ingredients() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientItems = ingredients.map((item) => <li key={item}>{item}</li>);
  return (
    <div>
      <h1>Ingredients</h1>
      <ul>{ingredientItems}</ul>
    </div>
  );
}
