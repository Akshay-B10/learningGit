"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todo = [];
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    console.log(req.url);
    res.status(200).json({
        todo: todo
    });
});
router.post("/todo", (req, res) => {
    const newTodo = {
        id: new Date().toString(),
        desc: req.body.desc
    };
    todo.push(newTodo);
    res.status(201).json({
        message: "Todo created",
        todo: newTodo
    });
});
router.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    const ogLength = todo.length;
    todo = todo.filter(item => item.id !== id);
    if (ogLength === todo.length) {
        return res.status(404).json({
            message: "Item not found"
        });
    }
    res.status(200).json({
        message: "Todo deleted",
    });
});
router.put("/todo/:id", (req, res) => {
    const id = req.params.id;
    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id === id) {
            todo[i].desc = req.body.desc;
            return res.status(200).json({
                message: "Todo updated",
                todo: todo[i]
            });
        }
    }
    res.status(404).json({
        message: "Item not found"
    });
});
exports.default = router;
