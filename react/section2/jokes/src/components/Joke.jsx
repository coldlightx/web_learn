import "./Joke.css";

export default function Joke({ setup, punchline }) {
  let display_setup = true;

  if (!setup) {
    display_setup = "none";
  }

  return (
    <div className="joke">
      {setup && (
        // style={{ display: setup ? "block" : "none" }} 也可以
        <p className="setup">Setup: {setup}</p>
      )}
      <p className="punchline">{punchline}</p>
      <hr />
    </div>
  );
}
