const path = require("path");

const rootDir = require("../util/path");

exports.errorPage = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "page-not-found.html"));
}