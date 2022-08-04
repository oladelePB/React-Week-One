import logo from "./logo.svg";
import "./App.css";

function App() {
  const animals = ["Horse", "Turtle", "Elephant", "Monkey"];
  const users = [
    { name: "Ola", age: 10, email: "test@ymail.com", id: 1 },
    { name: "Jack", age: 10, email: "jack@ymail.com", id: 2 },
    { name: "Remy", age: 10, email: "remy@ymail.com", id: 3 },
    { name: "Lionel", age: 10, email: "lionel@ymail.com", id: 4 },
  ];

  const isExist = false;

  return (
    <div className="App">
      <h1>Exercice Two</h1>
      {isExist ? (
        <ul>
          {animals.map((animal, index) => {
            return <li key={index}>{animal}</li>;
          })}
        </ul>
      ) : (
        users.map((user) => {
          return (
            <p key={user.id}>
              My name is <strong>{user.name} </strong> , I am{" "}
              <strong> {user.age}</strong> years old. Contact me on{" "}
              <strong> {user.email}</strong>
            </p>
          );
        })
      )}
    </div>
  );
}

export default App;
