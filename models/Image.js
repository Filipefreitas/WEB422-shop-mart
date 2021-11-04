const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema({
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

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;