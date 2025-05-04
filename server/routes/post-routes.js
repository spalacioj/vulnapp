const express = require("express");
const router = express.Router();
const post = require("../controllers/post-controllers")

router.get('/posts/:id', post.getPostById);
router.get('/comments/:id', post.getCommentsById);
router.post('/postComment', post.postComment);
router.get('/postsDescription', post.getPostDescription);

module.exports = router;