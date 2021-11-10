const express = require('express')
const router = express.Router();
const categoryService = require("../services/CategoryService.js");

//Route to all image categories stored in mongoDb
router.get("/", categoryService.getAllCategories);

module.exports = router
