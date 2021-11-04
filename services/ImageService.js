const imageModel = require("../models/Image.js");

exports.getAllImgCategories = (req,res)=>{
    imageModel.find()
    .then(images=>{
        res.json({
            message: "A list of all images"
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
