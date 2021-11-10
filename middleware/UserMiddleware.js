const userModel = require("../models/User");

exports.validateUser = (req, res, next)=>
{
    const user = new userModel(req.body);

    const minLengthName = 2;
    const maxLengthName = 20;
    
    //firstName validations
    if(user.firstName == undefined)
    {
        res.status(500).json({
            firstNameErr: "Error. First name is undefinied"
        })
    }
    else if(user.firstName.length < `${minLengthName}` || user.firstName.length > `${maxLengthName}`)
    {   
        res.status(500).json({
            firstNameErr: `First name must be between ${minLengthName} and ${maxLengthName} characters long`
        })
    }

    //lastName validations
    else if(user.lastName == undefined)
    {
        res.status(500).json({
            lastNameErr: "Error. Last name is undefinied"
        })
    }
    else if(user.lastName.length < `${minLengthName}` || user.lastName.length > `${maxLengthName}`)
    {
        res.status(500).json({
            lastNameErr: `Last name must be between ${minLengthName} and ${maxLengthName} characters long`
        })
    }

    else
    {
        //email validations
        const email = req.body.email;

        userModel.findOne({email:email})
        .then((user)=>{
            if(user)
            {
                res.json({
                    emailErr: "There is already a user associated to this email address"
                })
            }
        })
        .catch(err=>{
            res.status(500).json({
                message: err
            })
        })

        const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(user.email == undefined)
        {
            res.status(500).json({
                emailErr: "Error. Email is undefinied"
            })
        }
        else if(!checkEmail.test(user.email))
        {
            res.status(500).json({
                emailErr: "Please enter a valid email address"
            })
        }
        
        else
        {
            //password validations
            const minLengthPass = 6;
            const maxLengthPass = 12;
            const checkPassword = /^[a-zA-Z0-9_.-]*$/;
            
            if(user.password == undefined)
            {
                res.status(500).json({
                    passwordErr: "Error. You must create a password"
                })
            }
            else if(user.password.length < `${minLengthPass}` || user.password.length > `${maxLengthPass}`)
            {
                res.status(500).json({
                    passwordErr: `Password has to be between ${minLengthPass} and ${maxLengthPass} characters long`
                })
            }
            else if(!checkPassword.test(user.password))
            {
                res.status(500).json({
                    passwordErr: "Password must contain letters and numbers only"
                })
            }
            else
            {
                next();
            }
        }
    }
}