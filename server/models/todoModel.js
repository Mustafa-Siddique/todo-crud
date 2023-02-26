import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;