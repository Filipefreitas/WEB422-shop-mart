const userModel = require("../models/User.js");

exports.createAUser = (req, res)=> {
    const user = new userModel(req.body);

    //validation constants
    const minLengthName = 2;
    const maxLengthName = 20;
    const minLengthPass = 6;
    const maxLengthPass = 12;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkPassword = /^[a-zA-Z0-9_.-]*$/;

    //first name validations
    if(user.firstName == undefined)
    {
        res.json({
            message: "Error while creating user. First name is undefinied"
        })
    }
    else if(user.firstName.length < `${minLengthName}` || user.firstName.length > `${maxLengthName}`)
    {
        res.json({
            message: `First name must be between ${minLengthName} and ${maxLengthName} characters long`
        })
    }
    
    //last name validations
    else if(user.lastName == undefined)
    {
        res.json({
            message: "Error while creating user. Last name is undefinied"
        })
    }
    else if(user.lastName.length < `${minLengthName}` || user.lastName.length > `${maxLengthName}`)
    {
        res.json({
            message: `Last name must be between ${minLengthName} and ${maxLengthName} characters long`
        })
    }

    //email address validations
    else if(user.email == undefined)
    {
        res.json({
            message: "Error while creating user. Email is undefinied"
        })
    }
    else if(!checkEmail.test(user.email))
    {
        res.json({
            message: "Please enter a valid email address"
        })
    }

    //password check
    else if(user.password == undefined)
    {
        res.json({
            message: "Error while creating user. You must create a password"
        })
    }
    else if(user.password.length < `${minLengthPass}` || user.password.length > `${maxLengthPass}`)
    {
        res.json({
            message: `Password has to be between ${minLengthPass} and ${maxLengthPass} characters long`
        })
    }
    else if(!checkPassword.test(user.password))
    {
        res.json({
            message: "Password must contain letters and numbers only"
        })
    }

    //all validations passed = create a user
    else
    {
        user.save()
        .then((newUser)=>{
            res.json({
                message: "The user was successfully created and store in the database"
                , data: newUser
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err
            })
        })
    }
};

exports.getUsers = (req,res)=>{
    userModel.find()
    .then(users=>{
        res.json({
            message: "A list of all users"
            , data: users
            , totalUsers: users.length
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

exports.getAUser = (req,res)=>{
    userModel.findById(req.params.id)
    .then(user=>{
        if(user)
        {
            res.json({
                message: `user with the id ${req.params.id}`
                , data: user
            })
        }
        else
        {
            res.status(404).json({
                message: `There is no user in our database with the id ${req.params.id}`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

exports.updateAUser = (req,res)=>{
    userModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(user=>{
        if(user)
        {
            res.json({
                message: `user with the id ${req.params.id} was successfully updated`
                , data: user
            })
        }
        else
        {
            res.status(404).json({
                message: `There is no user in our database with the id ${req.params.id}`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

exports.deleteAUser = (req,res)=>{
    userModel.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.json({
            message: `user with the id ${req.params.id} was successfully deleted`
        })
    })        
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

//function to test if email address has already been taken
exports.checkUniqueUser = (req, res, next)=>
{
    const email = req.body.email;

    userModel.findOne({email:email})
    .then((user)=>{
        if(user)
        {
            res.json({
                message: "There is already a user associated to this email address"
            })
        }
        else
        {
            next();
        }
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
}
