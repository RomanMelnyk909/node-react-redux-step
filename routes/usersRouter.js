const express = require("express");
const router = express.Router();

// Import userController
const { getUsers, createUser, getUserById, updateUser, deleteUserById, updateUserPassword } = require("../controllers/usersController");

router.get("/", getUsers);
router.get("/:id", getUserById)
router.post("/", createUser);
router.delete('/:id', deleteUserById)
router.put('/edit', updateUser)
router.put('/:id/updatePassword', updateUserPassword)

module.exports = router;
