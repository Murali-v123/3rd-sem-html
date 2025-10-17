import { useEffect, useState } from "react";
import "./App.css";

import { FaListUl } from "react-icons/fa";
import { TodoInput } from "./components/todoinput";
import { TodoList } from "./components/todolist";

function App() {
  const getInitialTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    // Otherwise, return an empty array.
    return storedTodos ? JSON.parse(storedTodos) : [];
  };
  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container py-5 text-white">
      <h2 className="text-dark text-center mb-4 d-flex align-items-center justify-content-center gap-4">
        <span>Rect Bootstrap Todo App</span> <FaListUl className="mt-2" />
      </h2>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
