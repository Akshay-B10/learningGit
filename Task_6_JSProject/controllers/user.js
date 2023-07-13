const path = require("path");

const rootDir = require("../util/path");

const Todo = require("../models/todo");

exports.getIndex = (req, res) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
}

exports.addTodo = (req, res) => {
    Todo.
        create({
            name: req.body.name,
            description: req.body.description
        })
        .then((data) => {
            res.json(data);
        })
        .catch(err => console.log(err));
};

exports.getAllTodos = (req, res) => {
    Todo
        .findAll()
        .then(todos => {
            res.json(todos);
        })
        .catch(err => console.log(err));
};

exports.todoCompleted = (req, res) => {
    const id = req.query.id;
    Todo
        .findByPk(id)
        .then(todo => {
            return todo.update({ status: true })
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err));
};

exports.delTodo = (req, res) => {
    id = req.query.id;
    Todo
        .findByPk(id)
        .then((todo) => {
            return todo.destroy();
        })
        .then((data) => {
            res.json(data);
        })
        .catch(err => console.log(err));
};