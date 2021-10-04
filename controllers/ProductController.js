const express = require('express')
const router = express.Router()
const productService = require("../services/ProductService.js");

//Create
router.post("/", productService.createAProduct) 

//Read all
router.get("/", productService.getAllProducts)

//Read categories
router.get("/categories", productService.getAllCategories)

//Read one
router.get("/:id", productService.getAProduct)

//Update
router.put("/:id", productService.updateAProduct)

//Delete
router.delete("/:id", productService.deleteAProduct)

module.exports = router
