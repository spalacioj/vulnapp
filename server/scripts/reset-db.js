const fs = require('fs');
const pool = require('../config/db');

const resetDatabase = (req, res) => {
    const sqlScript = fs.readFileSync(__dirname + '/dump.sql', 'utf-8');

    pool.getConnection((err, connection) => {
        if (err) {
            console.error("Failed to get DB connection:", err.message);
            
            return;
        }
        connection.query(sqlScript, (err) => {
            connection.release();
            if (err) {
                console.error("Error executing SQL script:", err.message);
            } else {
                console.log("Database reset successfully!");
                return res.status(200).json({ message: 'Database reset successfully!' });
            }
        });
        
    });
}

module.exports = resetDatabase;