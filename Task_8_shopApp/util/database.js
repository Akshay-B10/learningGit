const mysql = require("mysql2");

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    database : "newdatabase",
    password : "MonkeyD.Luffy"
});

module.exports = pool.promise();