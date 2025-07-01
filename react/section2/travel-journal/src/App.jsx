import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

const entries = data.map((entry) => <Entry key={entry.id} {...entry} />);
export default function App() {
  return (
    <>
      <Header />
      {entries}
    </>
  );
}
