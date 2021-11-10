const productModel = require("../models/Product");

exports.validateProduct = (req, res, next)=>
{
    const product = new productModel(req.body);

    const minLengthName = 5;
    const maxLengthName = 50;
    
    //firstName validations
    if(product.name == undefined)
    {
        res.status(500).json({
            message: "Error while creating user. Product name is undefinied"
        })
    }
    else if(product.name.length < `${minLengthName}` || product.name.length > `${maxLengthName}`)
    {
        res.status(500).json({
            message: `Product name must be between ${minLengthName} and ${maxLengthName} characters long`
        })
    }

    //price validation
    else if(product.price == undefined)
    {
        res.status(500).json({
            message: "Error while creating product. Price is undefinied"
        })
    }

    //category validation
    else if(product.category == undefined)
    {
        res.status(500).json({
            message: "Error while creating product. Category must be specified"
        })
    }

    //bestseller validation
    else if(product.isBestseller == undefined)
    {
        res.status(500).json({
            message: "Error while creating product. Inform whether is a bestseller"
        })
    }

    //source image validation
    else if(product.srcImg == undefined)
    {
        res.status(500).json({
            message: "Error while creating product. Provide a URL"
        })
    }

    else    
    {
        next();
    }
}