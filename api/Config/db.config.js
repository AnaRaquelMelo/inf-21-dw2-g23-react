const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "dw2",
});

dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database connected");
});

module.exports = dbConn;
