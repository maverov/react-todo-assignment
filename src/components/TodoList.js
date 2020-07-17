import React, { Component } from "react";
import TodoItem from "./TodoItem";

// ToDo List Component
export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>todo list</h2>
        <TodoItem />
      </section>
    );
  }
}
