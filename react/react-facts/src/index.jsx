import { createRoot } from "react-dom/client";
// import { Fragment } from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

const root = createRoot(document.getElementById("root"));

root.render(<Page />);

// output an object
console.log(<h1>Hello world!</h1>);

function Page() {
  return (
    // <Fragment><Fragment/> can also do this
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
