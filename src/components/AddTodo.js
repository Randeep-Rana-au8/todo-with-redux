import React from "react";
import { connect } from "react-redux";
import { add_todo } from "../actions/todoAction";

const AddTodo = ({ add_todo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    add_todo(e.target.todo.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default connect(null, { add_todo })(AddTodo);
