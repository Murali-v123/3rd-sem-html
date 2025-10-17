import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";


export const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary d-flex align-items-center" type="submit">
        <FaPlus className="me-2" />
        Add
      </button>
    </form>
  );
};
