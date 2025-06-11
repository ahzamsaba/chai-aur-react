import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "ahzam",
    age: 23
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-lg shadow-md mb-4">
        Tailwind Test
      </h1>

      {/* <Card channel="chai aur code" user = {myObj} arr = {newArr}/> */}
      <Card username="ahzamsaba" btnText="Click me" />
      <Card username="sabaasghar" btnText="Visit me" />
      <Card />

    </>
  );
}

export default App;
