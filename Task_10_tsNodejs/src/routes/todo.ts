import { Router } from "express";
import { Todo } from "../models/todo";

type ReqBody = { desc: string };
type ReqParams = { id: string };

let todo: Todo[] = [];

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({
        todo: todo
    });
});

router.post("/todo", (req, res) => {
    const body = req.body as ReqBody;
    const newTodo: Todo = {
        id: new Date().toString(),
        desc: body.desc
    };

    todo.push(newTodo);
    res.status(201).json({
        message: "Todo created",
        todo: newTodo
    });
});

router.delete("/todo/:id", (req, res) => {
    const params = req.params as ReqParams;
    const id = params.id;
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
    const params = req.params as ReqParams;
    const body = req.body as ReqBody;
    const id = params.id;
    for (let i = 0; i < todo.length; i++) {
        if (todo[i].id === id) {
            todo[i].desc = body.desc;
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

export default router;