const path = require("path");

const rootDir = require("../util/path");

const Users = require("../model/users");

exports.getIndex = (req, res) => {
    res.json(path.join(rootDir, "views", "index.html"));
};