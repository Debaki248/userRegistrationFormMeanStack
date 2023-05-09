const Validator = require('validator');
const mongooseOne = require('mongoose');
const user = mongooseOne.model('user');
const emailValid = require('../models/usermodel');
module.exports.register = async(req,res,next) => { 
    console.log("inside register");
    var userOne = new user();
    console.log("fullName => ",req.body);
    userOne.fullName = req.body.fullName;
    userOne.email = req.body.email;
    userOne.password = req.body.password;
    userOne.saltSecret = req.body.saltSecret;
    console.log("Fullname = ",userOne.fullName);
    console.log("Email = ",userOne.email);
    console.log("password = ",userOne.password);
    console.log("saltSecret = ",userOne.saltSecret);
            try{
                const newData = await userOne.save();
                res.status(201).json({
                success:true,
                message:"signup successful",
                data:newData
                
            });
            }catch(error){
                return res.status(412).send({
                    success:false,
                    message:error.message
                })
            }
}

module.exports.registerTesting = (req,res,next) => {
    console.log("inside registerTesting");
    console.log("getting from request => ",req.body);
} 
            /*
        const newData = await userOne.save();
        res.status(201).json({
            success:true,
            message:"signup successful",
            data:newData
        });
    }catch(error){
        return res.status(412).send({
            success:false,
            message:error.message
        })
    }
    */



