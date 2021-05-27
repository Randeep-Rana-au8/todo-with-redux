import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <div>
        <h1>TODOS</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
