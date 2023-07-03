const fs = require("fs");

const reqHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader("content-type", "text/html");
    if (url == "/") {
        fs.readFile("message.txt", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            res.write("<html>");
            res.write("<head><title>Form</title></head>");
            res.write(`<body><form action ='/message' method ='POST'><p>${data}</p><input type = 'text' name = 'msg'><button type = 'submit'>Send</button></form></body>`);
            res.write("</html>");
            return res.end();
        });
    }
    if (url == "/message" && method == "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const msg = parsedBody.split("=")[1];
            fs.writeFile("message.txt", msg, () => {
                res.statusCode = 302;
                res.setHeader("location", "/");
                return res.end();
            });
        });
    }
    if (url == "/home") {
        res.write("<html>");
        res.write("<head><title>Home Page</title></head>");
        res.write("<body><h1>Welcome to Home Page</h1></body>");
        res.write("</html>");
        return res.end();
    }
    if (url == "/about") {
        res.write("<html>");
        res.write("<head><title>About us Page</title></head>");
        res.write("<body><h1>Welcome to About us Page</h1></body>");
        res.write("</html>");
        return res.end();
    }
    if (url == "/node") {
        res.write("<html>");
        res.write("<head><title>Node JS</title></head>");
        res.write("<body><h1>Welcome to Node JS Project</h1></body>");
        res.write("</html>");
        return res.end();
    }
});
// module.exports = reqHandler;
/*
module.exports = {
    handler: reqHandler,
    someText: "Hello"
};
*/
/*
module.exports.handler = reqHandler;
module.exports.someText = "Hello";
*/
exports.handler = reqHandler;
exports.someText = "Hello";