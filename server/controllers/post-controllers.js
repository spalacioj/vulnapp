const pool = require("../config/db");

const getPostById = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT title, content, author_id FROM posts WHERE post_id = ${id}`;

    pool.query(sql, (err, results) => {
        if(err){
            console.error("Error executing SQL query:", err.message)
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        if(results.length > 0){
            const post = results[0];
            return res.status(200).json(post);
        }
    })
}

const getCommentsById = (req, res) => {
    const { id } = req.params;
    const sql = `
        SELECT users.username, comments.comment, comments.comment_id
        FROM comments
        JOIN users ON comments.user_id = users.user_id
        WHERE comments.post_id = ${id}
    `;

    pool.query(sql, (err, results) => {
        if(err){
            console.error("Error executing SQL query:", err.message)
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        const comments = results;
        return res.status(200).json(comments);
    })
}

const postComment = (req, res) => {
    const { post_id, user_id, comment } = req.body;
    const sql = `INSERT INTO comments (post_id, user_id, comment, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)`;

    pool.query(sql, [post_id, user_id, comment], (err, results) => {
        if(err){
            console.error("Error executing SQL query:", err.message);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }
        
        return res.status(200).json({message: "comment saved successfully"});
    })
}

const getPostDescription = (req, res) => {
    const sql = `
                SELECT 
                    posts.post_id, 
                    users.username AS author, 
                    posts.title, 
                    posts.description
                FROM posts
                INNER JOIN users ON posts.author_id = users.user_id
                `;

    pool.query(sql, (err, results) => {
        if(err){
            console.error("Error executing SQL query:", err.message);
            res.status(500).json({ message: 'Internal server error' });
            return; 
        }

        return res.status(200).json(results);
    })
}

module.exports = {
    getPostById,
    getCommentsById,
    postComment,
    getPostDescription
}

