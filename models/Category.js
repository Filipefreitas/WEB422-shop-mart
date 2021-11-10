const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
    categoryName: 
    { 
        type: String 
        , required: true
    }
    , categorySrcImg: 
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

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;