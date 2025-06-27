import "./App.css";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

const jokes = jokesData.map(({ setup, punchline }) => (
  <Joke setup={setup} punchline={punchline} />
));

function App() {
  return <>{jokes}</>;
}

export default App;
