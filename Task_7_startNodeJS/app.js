const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html");
    if (req.url == "/home") {
        res.write("<html>");
        res.write("<head><title>Home Page</title></head>");
        res.write("<body><h1>Welcome to Home Page</h1></body>");
        res.write("</html>");
        res.end();
    } else if (req.url == "/about") {
        res.write("<html>");
        res.write("<head><title>About us Page</title></head>");
        res.write("<body><h1>Welcome to About us Page</h1></body>");
        res.write("</html>");
        res.end();
    } else if (req.url == "/node") {
        res.write("<html>");
        res.write("<head><title>Node JS</title></head>");
        res.write("<body><h1>Welcome to Node JS Project</h1></body>");
        res.write("</html>");
        res.end();
    } else {
        console.log("Invalid url");
    }
})

server.listen(4000);