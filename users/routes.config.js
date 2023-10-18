const express = require("express");
const UsersController = require("./controllers/userController");

const router = express.Router();

router.get("/users", [UsersController.getAllUsers]);

router.post("/users", [UsersController.addUser]);

module.exports = router;
