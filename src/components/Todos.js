import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todos: [...state.todos],
    // users: { ...state.users },
  };
};

export default connect(mapStateToProps, null)(Todos);
