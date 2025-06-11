import { createRoot } from "react-dom/client";
import { createElement } from "react";

let doc_element = document.createElement("h1");
doc_element.textContent = "imperative way";
doc_element.className = "header";

let root = document.getElementById("root");
root.append(doc_element);

// react declarative
const react_root = createRoot(document.getElementById("root"));

react_root.render(<h1 className="header">react declarative</h1>);
