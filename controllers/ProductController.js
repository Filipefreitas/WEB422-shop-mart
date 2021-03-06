const express = require('express')
const router = express.Router()
const productService = require("../services/ProductService.js");
const productMiddleware = require("../middleware/ProductMiddleware.js");
const generalMiddleware = require("../middleware/GeneralMiddleware.js");

//Create
router.post("/", productMiddleware.validateProduct, productService.createAProduct) 

//Read all
router.get("/", productService.getAllProducts)

//Read categories
router.get("/categories", productService.getAllCategoryObjects)

//Read one
router.get("/:id", generalMiddleware.testId, productService.getAProduct)

//Update
router.put("/:id",  generalMiddleware.testId, productService.updateAProduct)

//Delete
router.delete("/:id",  generalMiddleware.testId, productService.deleteAProduct)

module.exports = router
