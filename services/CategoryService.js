const categoryModel = require("../models/Category.js");

exports.getAllCategories = (req,res)=>{
    categoryModel.find()
    .then(images=>{
        res.json({
            message: "A list of all categories"
            , data: images
            , totalImages: images.length
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};
