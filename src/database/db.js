// src/models/db.js
const mysql = require("mysql");

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_nodejs",
  connectionLimit: 10, // Adjust as needed
});

module.exports = pool;
