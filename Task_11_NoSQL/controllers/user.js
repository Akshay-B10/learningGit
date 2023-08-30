const path = require("path");

const User = require("../models/user");

exports.signUp = (req, res) => {
    res.sendFile(path.join(__dirname, "../", "views", "signup.html"));
};

exports.addUser = (req, res) => {
    const { name, email, password } = req.body;
    if (password == "") {
        throw ("Please fill required details");
    }
    const user = new User({
        name: name,
        email: email,
        password: password,
        cart: {
            items: []
        }
    });
    user
        .save()
        .then(user => {
            res.json({
                message: "User created successfully!"
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err
            })
        });
};