const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: 
    { 
        type: String 
        , required: true
    }
    , lastName: 
    { 
        type: String 
        , required: true
    }
    , email: 
    { 
        type: String 
        , required: true
    }
    , password: 
    { 
        type: String 
        , required: true
    }
    , phoneNumbers: 
    { 
        type: Array
    }
    , dateCreated: 
    { 
        type: Date
        , default: Date.now()
    }
});

userSchema.pre("save", function(next)
{
    bcrypt.genSalt(10)
    .then((salt)=>
    {
        bcrypt.hash(this.password, salt)
        .then((encryptedPassword)=>
        {
            this.password = encryptedPassword;
            next();
        })
        .catch(err=>console.log(`Error occured when hashing ${err}`));        
    })
    .catch(err=>console.log(`Error occured when salting ${err}`));
});

//model Object. Allows you to perform CRUD operations
//'User' is going to be the name of the collection in mongoDB
const User = mongoose.model('User', userSchema);

module.exports = User;