import GoodMorning from "./Goodmorning";
import "./App.css";

function App() {
  const name = "Dele";
  const ageRange = [
    { name: "Dele", id: 1 },
    { name: "Jack", id: 2 },
    { name: "Ela", id: 3 },
    { name: "Waqar", id: 4 },
    { name: "Laura", id: 5 },
  ];

  return (
    <div className="app">
      <h1>Hello world</h1>
      <GoodMorning userName={name} ageRange={ageRange}></GoodMorning>
      <h1>Welcome to React</h1>
    </div>
  );
}

export default App;
