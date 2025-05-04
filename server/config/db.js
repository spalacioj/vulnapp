const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root', 
  database: 'vulnapp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  if (err) {
      console.error("Database connection failed:", err.message);
  } else {
      console.log("Database connected successfully!");
      connection.release(); 
  }
});

module.exports = pool;