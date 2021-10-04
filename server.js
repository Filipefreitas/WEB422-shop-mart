const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config({ path: 'config/keys.env' });
const generalController = require("./controllers/GeneralController.js");
const userController = require("./controllers/UserController.js");
const productController = require("./controllers/ProductController.js");

const app = express();
app.use(express.json());
app.use("/users", userController);
app.use("/products", productController);
app.use("/", generalController);

app.listen(process.env.PORT,()=>{
    console.log(`RESTful API is up and running on port ${process.env.PORT}`);
    
    //async operation. A promise is an object that represent the eventual completion or rejection of an async operation
    mongoose.connect(process.env.MONGO_DB_QUERY_STRING)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })
})