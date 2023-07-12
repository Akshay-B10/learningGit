const path = require("path");

const rootDir = require("../util/path");

const Expense = require("../model/expense");

exports.getIndex = (req, res) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
};

exports.addExpense = (req, res) => {
    Expense
        .create({
            amount: req.body.amount,
            description: req.body.desc,
            category: req.body.category
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

exports.delExpense = (req, res) => {
    id = req.query.id;
    Expense
    .findByPk(id)
    .then((exp) => {
        return exp.destroy();
    })
    .then((data) => {
        res.json(data);
    })
    .catch((err) => console.log(err));
};