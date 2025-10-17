import React from "react";
import { FaTrashAlt } from "react-icons/fa";


export const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  console.log("1234rfds", todo);
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "gray" : "black",
          }}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="btn btn-sm btn-danger d-flex align-items-center gap-2"
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <FaTrashAlt/>
        Delete
      </button>
    </li>
  );
};
