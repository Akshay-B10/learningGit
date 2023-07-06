const path = require("path");

const rootDir = require("../util/path");

exports.contactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "contactus.html"));
}