const pool = require("../config/db");

const login = (req, res) => {
    const { username, password } = req.body;
    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    
    pool.query(sql, (err, results) => {
        if (err) {
            console.error("Error executing SQL query:", err.message);
            res.status(500).json({ message: 'Internal server error' });
            return;
        } 
        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful', user: results[0] });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
};

const signup = (req, res) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const sql = `INSERT INTO users (username, password, email, role) VALUES ('${username}', '${password}', '${email}', 'user')`;

    pool.query(sql, (err, results) => {
        if (err) {
            console.error("Error executing SQL query:", err.message);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        res.status(200).json({ message: 'User created successfully' });
    });
}

const users = (req, res) => {
    const { id } = req.params;

    const sql = `SELECT username from users WHERE user_id = ${id}`;

    pool.query(sql, (err, results) => {
        if(err){
            res.status(500).json({ message: 'Internal server error'});
            return;
        }
        if(results.length > 0){
            const username = results[0];
            return res.status(200).json(username);
        } else {
            return res.status(404).json({ message: 'User not found'});
        }
        
    })
}


module.exports = {
  login,
  signup,
  users
};