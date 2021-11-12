const userModel = require("../models/User.js");

exports.createAUser = (req, res)=> {
    const user = new userModel(req.body);
    
    user.save()
    .then((newUser)=>{
        res.json({
            message: "User successfully created"
            , data: newUser
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
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

