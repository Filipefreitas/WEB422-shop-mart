const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config({ path: 'config/keys.env' });
const generalController = require("./controllers/GeneralController.js");
const userController = require("./controllers/UserController.js");
const productController = require("./controllers/ProductController.js");
const categoryController = require("./controllers/CategoryController.js");

const app = express();
app.use(express.json());

const corsOptionsDelegate = function (req, callback) 
{
    const whitelist =  ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://amazing-edison-d65047.netlify.app/']
    let  corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) 
    {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } 
    else 
    {
        corsOptions = { origin: false } // disable CORS for this request
    }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

//middleware
app.use(cors(corsOptionsDelegate))

app.use("/users", userController);
app.use("/products", productController);
app.use("/categories", categoryController);
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
