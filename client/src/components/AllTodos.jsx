import axios from "axios";
import React, { useEffect, useState } from "react";
import { TodoElement } from "./TodoElement";

export const AllTodos = () => {
  // State to store all todos
  const [allTodos, setAllTodos] = useState([]);
  const API_URI = "http://localhost:8000";

  // Get all todos on page load
  useEffect(() => {
    getAllTodos();
  }, []);

  // Calling getAllTodos function in every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getAllTodos();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get all todos
  const getAllTodos = async () => {
    try {
      const response = await axios.get(`${API_URI}/todos`);
      setAllTodos(response.data.data.todos);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="text-start fs-6">
      <h3 className="h5 mt-3">Saved Tasks</h3>
      {/* Mapping allTodos */}
      {allTodos.map((todo) => (
        <TodoElement key={todo._id} todo={todo} />
      ))}
    </div>
  );
};
