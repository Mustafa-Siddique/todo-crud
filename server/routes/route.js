import express from "express";
import { addTodo, deleteTodo, getAllTodos, toggleTodo, updateTodo } from "../controller/todoController.js";

// Create a Router
const router = express.Router();

// Base Route
router.get('/', (req, res) => {
    res.send('This is the Base Route');
});

// Routes for Todos API
router.get('/todos', getAllTodos);
router.post('/todos', addTodo);
router.patch('/todos/:id', toggleTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;