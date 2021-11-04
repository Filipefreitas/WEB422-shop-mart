const productModel = require("../models/Product.js");

exports.createAProduct = (req, res)=> {
    const product = new productModel(req.body);
    product.save()
    .then((newProduct)=>{
        res.json({
            message: "The product was successfully created and store in the database"
            , data: newProduct
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

//query best seller
exports.getAllProducts = (req,res)=>{
    if(req.query.isBestseller)
    {
        productModel.find()
        .where("isBestseller").equals(req.query.isBestseller==="yes" ? true : false)
        .then((products)=>{
            res.json({
                message : req.query.isBestseller==="yes" ? `A list of all best-seller product` : "A List of non-best-seller products"
                , data: products
                , totalProducts: products.length
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err
            })
        })
    }
    
    else if(req.query.isFeatured)
    {
        productModel.find()
        .where("isFeatured").equals(req.query.isFeatured==="yes" ? true : false)
        .then((products)=>{
            res.json({
                message : req.query.isBestseller==="yes" ? `A list of all featured product` : "A List of non-featured products"
                , data: products
                , totalProducts: products.length
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err
            })
        })
    }

    //query category
    else if(req.query.category)
    {
        productModel.find()
        .where("category").equals(req.query.category)
        .then((products)=>{
            res.json({
                message: `A list of all products with the category ${req.query.category}`
                , data: products
                , totalProducts: products.length
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err
            })
        })
    }

    else
    {
        productModel.find()
        .then(products=>{
            res.json({
                message: "A list of all products"
            , data: products
            , totalProducts: products.length
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })

    }
};

exports.getAProduct = (req,res)=>{
    productModel.findById(req.params.id)
    .then(product=>{
        if(product)
        {
            res.json({
                message: `product with the id ${req.params.id}`
                , data: product
            })
        }
        else
        {
            res.status(404).json({
                message: `There is no product in our database with the id ${req.params.id}`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

//retrive list of all product categories in the database
exports.getAllCategories = (req,res)=>{
    productModel.find().distinct("category", function(err, categories){
        res.json({
            message: `list of all categories`
            , data: categories
        })
    })    
};

exports.updateAProduct = (req,res)=>{
    productModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(product=>{
        if(product)
        {
            res.json({
                message: `product with the id ${req.params.id} was successfully updated`
                , data: product
            })
        }
        else
        {
            res.status(404).json({
                message: `There is no product in our database with the id ${req.params.id}`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

exports.deleteAProduct = (req,res)=>{
    productModel.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.json({
            message: `product with the id ${req.params.id} was successfully deleted`
        })
    })        
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};