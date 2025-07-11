import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let flag = false;

  let result = flag ? "yes" : "no";
  console.log(result);
  console.log("component rerendered");

  return (
    <div className="app">
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        id="decrease"
      >
        -
      </button>
      <h2 id="count">{count}</h2>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        id="increase"
      >
        +
      </button>
    </div>
  );
}

export default App;
