const pool = require("../config/db");

const getUsers = (req, res) => {
    const sql = `SELECT user_id, username, email FROM users`;

    pool.query(sql, (err, results) => {
        if(err) {
            console.error("Error executing SQL query:", err.message);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        return res.status(200).json(results);
    })
}

const deleteUsers = (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM users WHERE user_id = ${id}`;

    pool.query(sql, (err, results) => {
        if(err) {
            console.error("Error executing SQL query:", err.message);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        return res.status(200).json({ message: 'User deleted succesfully' });
    })
}

const addUser = (req, res) => {
    const { username, password, email, role } = req.body;
    const sql = `INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?);`

    pool.query(sql, [username, password, email, role], (err, results) => {
        if(err) {
            console.error("Error executing SQL query:", err.message);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        return res.status(200).json({ message: 'User created succesfully' });
    })
}

module.exports = {
    getUsers,
    deleteUsers,
    addUser
}