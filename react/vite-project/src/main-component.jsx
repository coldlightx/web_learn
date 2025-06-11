import { createRoot } from "react-dom/client"
import { createElement } from "react"

const root = createRoot(document.getElementById("root"))

let element = createElement("h1", null, "Hello from createElement!")

let element2 = <h1>Hello from element in jsx</h1>
console.log(element)
console.log(element2)


function CustomComponent() {
  return (
    <h1>Custom component</h1>
  )
}

function MainContent() {
  return (
    <h1>Hello from Main Content</h1>
  )
}

root.render(
  <div>
    <CustomComponent />
    <MainContent />
  </div>
)



