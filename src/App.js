import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="container">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
