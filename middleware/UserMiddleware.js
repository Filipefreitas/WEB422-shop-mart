const userModel = require("../models/User");

exports.testName = (req, res, next)=>
{
    const user = new userModel(req.body);
    const minLengthName = 2;
    const maxLengthName = 20;
    
    //firstName validations
    if(user.firstName == undefined)
    {
        res.json({
            message: "Error. First name is undefinied"
        })
    }
    else if(user.firstName.length < `${minLengthName}` || user.firstName.length > `${maxLengthName}`)
    {
        res.json({
            message: `First name must be between ${minLengthName} and ${maxLengthName} characters long`
        })
    }

    //lastName validations
    else if(user.lastName == undefined)
    {
        res.json({
            message: "Error. Last name is undefinied"
        })
    }
    else if(user.lastName.length < `${minLengthName}` || user.lastName.length > `${maxLengthName}`)
    {
        res.json({
            message: `Last name must be between ${minLengthName} and ${maxLengthName} characters long`
        })
    }

    else
    {
        next();
    }
}

//function to test if email address has already been taken
exports.testUniqueUser = (req, res, next)=>
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

exports.testEmail = (req, res, next)=>
{
    const user = new userModel(req.body);
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(user.email == undefined)
    {
        res.json({
            message: "Error. Email is undefinied"
        })
    }
    else if(!checkEmail.test(user.email))
    {
        res.json({
            message: "Please enter a valid email address"
        })
    }
    else
    {
        next();
    }
}
    
exports.testPassword = (req, res, next)=>
{
    const user = new userModel(req.body);
    const minLengthPass = 6;
    const maxLengthPass = 12;
    const checkPassword = /^[a-zA-Z0-9_.-]*$/;

    if(user.password == undefined)
    {
        res.json({
            message: "Error. You must create a password"
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
    else
    {
        next();
    }

}