const express = require('express');
const router = express.Router();
const contact = require("../controllers/contact-controllers");

router.post('/contact', contact.handleContact);

module.exports = router;


