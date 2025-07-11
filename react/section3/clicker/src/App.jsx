import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <div className="App" onClick={() => setFlag((pre) => !pre)}>
        <h1
          className="state"
          aria-label={`Current answer is ${
            flag ? "Yes" : "No"
          }. Click to change it.`}
        >
          {flag ? "Yes" : "No"}
        </h1>
      </div>
    </>
  );
}

export default App;
