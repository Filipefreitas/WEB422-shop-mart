const express = require('express')
const router = express.Router()
const userService = require("../services/UserService.js");
const userMiddleware = require("../middleware/UserMiddleware.js");

//Create
router.post("/", userMiddleware.testName, userMiddleware.testUniqueUser, userMiddleware.testEmail, userMiddleware.testPassword, userService.createAUser) 

//Read all
router.get("/", userService.getUsers)

//Read one
router.get("/:id", userMiddleware.testId, userService.getAUser)

//Update
router.put("/:id", userMiddleware.testId, userService.updateAUser)

//Delete
router.delete("/:id", userMiddleware.testId, userService.deleteAUser)

module.exports = router
