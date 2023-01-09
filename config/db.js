const mysql = require("mysql2");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "PROBO",
});

database.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = database;
