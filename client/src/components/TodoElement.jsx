import React, { useState } from "react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { FiCheckSquare } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import axios from "axios";
import { toast } from "react-toastify";

export const TodoElement = ({ todo }) => {
  // States
  const [editing, setEditing] = useState(false);
  const [todoData, setTodoData] = useState(todo.data);

  const API_URI = "http://localhost:8000";

  // Toggle todo status
  const toggleTodoStatus = async (id) => {
    try {
      const response = await axios.patch(`${API_URI}/todos/${id}`);
      console.log(response.data.status);
      if (response.data.status === "success") {
        toast.success("Todo status toggled successfully");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Update todo on submit
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { todo: todoData };
      const response = await axios.put(`${API_URI}/todos/${todo._id}`, body);
      console.log(response.data.status);
      if (response.data.status === "success") {
        setEditing(false);
        toast.success("Todo updated successfully");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${API_URI}/todos/${todo._id}`);
      console.log(response.data.status);
      if (response.data.status === "success") {
        toast.success("Todo deleted successfully");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div
      key={todo._id}
      className="listElement border rounded d-flex justify-content-between my-3 px-3 py-1"
    >
      <p className="fs-5 m-0" style={{ display: editing ? "none" : "" }}>
        {todo.completed ? <s>{todo.data}</s> : todo.data}
      </p>
      <form
        style={{ display: editing ? "" : "none" }}
        className="w-75"
        onSubmit={onSubmitForm}
      >
        <input
          type="text"
          className="form-control bg-transparent border-bottom border-0 "
          id="todo"
          value={todoData}
          onChange={(e) => setTodoData(e.target.value)}
        />
      </form>
      <div>
        {!todo.completed ? (
          <FiCheckSquare
            className="fs-5"
            onClick={() => toggleTodoStatus(todo._id)}
          />
        ) : (
          <GrPowerReset
            className="fs-5"
            onClick={() => toggleTodoStatus(todo._id)}
          />
        )}
        <HiPencilAlt
          className="fs-5 mx-1"
          onClick={() => setEditing((prevState) => !prevState)}
        />
        <HiTrash className="fs-5" onClick={() => deleteTodo()} />
      </div>
    </div>
  );
};
