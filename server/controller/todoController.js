import Todo from "../models/todoModel.js";

// Add a Todo
export const addTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.todo,
      completed: false,
      createdAt: Date.now(),
    });
    await newTodo.save();
    return res.status(201).json({
      status: "success",
      data: {
        newTodo,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get all Todos
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Toggle a Todo
export const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();
    return res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Update a Todo
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.data = req.body.todo;
    await todo.save();
    return res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
}

// Delete a Todo
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    await todo.remove();
    return res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
}