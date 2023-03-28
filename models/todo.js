const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    active: {
        type: "boolean",
    },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;