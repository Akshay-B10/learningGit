const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("In first middleware");
    next();
});

app.use((req, res, next) => {
    console.log("In the second middleware");
    res.send("<h1>Hello to NodeJS</h1>");
})

app.listen(4000);
// app.listen at backend; var server = http.createServer(this); return server.listen.apply(server, arguments);