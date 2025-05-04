const express = require("express");
const router = express.Router();
const resetDatabase = require("../scripts/reset-db");

router.post("/db/reset", resetDatabase);

module.exports = router;