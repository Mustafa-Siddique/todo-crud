import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const API_URL = "http://localhost:8000";

  // submit handler
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { todo };
      const response = await axios.post(`${API_URL}/todos`, body);
      console.log(response.data.status);
      // Notify user about the success using toastify
      if (response.data.status === "success") {
        setTodo("");
        toast.success("Todo added successfully");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="my-4">TODO using MERN</h1>
      {/* FORM using react-bootstrap for todo */}
      <form onSubmit={onSubmitForm}>
        <div className="form-group d-flex justify-content-between">
          <input
            type="text"
            className="form-control me-2"
            id="todo"
            placeholder="Enter Task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
