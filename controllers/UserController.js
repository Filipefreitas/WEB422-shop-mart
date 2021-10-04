const express = require('express')
const router = express.Router()
const userService = require("../services/UserService.js");

//Create
router.post("/", userService.checkUniqueUser, userService.createAUser) 

//Read all
router.get("/", userService.getUsers)

//Read one
router.get("/:id", userService.getAUser)

//Update
router.put("/:id", userService.updateAUser)

//Delete
router.delete("/:id", userService.deleteAUser)

module.exports = router
