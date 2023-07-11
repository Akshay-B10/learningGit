const path = require("path");

const rootDir = require("../util/path");

const Users = require("../model/users");

exports.getIndex = (req, res) => {
    res.sendFile(path.join(rootDir, "views", "index.html"));
};

exports.getUsers = (req, res) => {
    Users.
        findAll()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

exports.addUserData = (req, res) => {
    Users
        .create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

exports.delUser = (req, res) => {
    id = req.query.id;
    Users
        .findByPk(id)
        .then((user) => {
            return user.destroy();
        })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => console.log(err));
};