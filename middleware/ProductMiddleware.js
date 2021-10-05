const productModel = require("../models/Product");

exports.testName = (req, res, next)=>
{
    const product = new productModel(req.body);
    const minLengthName = 5;
    const maxLengthName = 50;

    //firstName validations
    if(product.name == undefined)
    {
        res.json({
            message: "Error while creating user. Product name is undefinied"
        })
    }
    else if(product.name.length < `${minLengthName}` || product.name.length > `${maxLengthName}`)
    {
        res.json({
            message: `Product name must be between ${minLengthName} and ${maxLengthName} characters long`
        })
    }

    else
    {
        next();
    }
}

exports.testPrice = (req, res, next)=>
{
    if(product.price == undefined)
    {
        res.json({
            message: "Error while creating product. Price is undefinied"
        })
    }
    else
    {
        next();
    }
}
    
exports.testCategory = (req, res, next)=>
{
    if(product.isBestseller == undefined)
    {
        res.json({
            message: "Error while creating product. Inform whether is a bestseller"
        })
    }
    else
    {
        next();
    }
}
    
exports.testBestseller = (req, res, next)=>
{
    if(product.category == undefined)
    {
        res.json({
            message: "Error while creating product. Category must be specified"
        })
    }
    else
    {
        next();
    }
}

exports.testImg = (req, res, next)=>
{
    if(product.srcImg == undefined)
    {
        res.json({
            message: "Error while creating product. Provide a URL"
        })
    }
    else
    {
        next();
    }
}