const express = require("express");
const router = express.Router();

// Import userController
const { getUsers } = require("../controllers/usersController");

router.get("/", getUsers);

module.exports = router;
