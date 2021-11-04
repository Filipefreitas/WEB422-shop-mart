const express = require('express')
const router = express.Router();
const imageService = require("../services/ImageService.js");

//Route to all image categories stored in mongoDb
router.get("/", imageService.getAllImgCategories);

module.exports = router
