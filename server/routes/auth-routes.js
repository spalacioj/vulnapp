const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth-controllers");

router.post('/login', auth.login); 
router.post('/signup', auth.signup);
router.get('/users/:id', auth.users);

module.exports = router;   