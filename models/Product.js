const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: 
    { 
        type: String 
        , required: true
    }
    , price: 
    { 
        type: Number
        , required: true
    }
    , description: 
    { 
        type: String 
    }
    , category: 
    {   
        type: Schema.Types.ObjectId
        , ref: 'Category'   
        , required: true
    }
    , quantity: 
    { 
        type: Number
    }
    , isBestseller: 
    { 
        type: Boolean
        , required: true
    }
    , isFeatured: 
    { 
        type: Boolean
        , required: true
    }
    , srcImg: 
    { 
        type: String
        , required: true
    }
    , dateCreated: 
    { 
        type: Date
        , default: Date.now()
    }
});

//model Object. Allows you to perform CRUD operations
//'Product' is going to be the name of the collection in mongoDB
const Product = mongoose.model('Product', productSchema);

module.exports = Product;