const express = require("express");
const router = express.Router();
const user = require('../controllers/user-controllers');

router.get('/users', user.getUsers);
router.delete('/users/:id', user.deleteUsers);
router.post('/createUser', user.addUser);

module.exports = router;