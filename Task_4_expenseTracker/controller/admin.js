const path = require("path");

const rootDir = require("../util/path");

const Expense = require("../model/expense");

exports.getIndex = (req, res) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
};