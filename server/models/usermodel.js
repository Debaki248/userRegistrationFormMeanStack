const newApp = require('mongoose');
const bcrypt = require('bcryptjs');
var userSchema = new newApp.Schema({
    fullName:{
        type: String,
        required:'Full name cannot be empty'
    },
    email:{
        type: String,
         required:'email cannot be empty'
    },
    password:{
        type: String,
        required:'password cannot be empty',
        minlength : [4,'password must be atleast 4 character long']
    },
    saltSecret: String
});
//custom validation for email

userSchema.path('email').validate((val)=> {
    emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    return emailRegex.test(val);
},'Invalid e-mail');
//Events will be triggered before calling save() in userController.js
userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=> {        //bcrypt.genSalt(saltRounds, function(err, salt)
        bcrypt.hash(this.password,salt,(err,hash)=>{    //bcrypt.hash(password, salt, function(err, hash)
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
})
/*
module.exports.uniqueEmail = function(email){
    return new Promise(function(resolve,reject){
        user.findOne({email:email},function(email_err,email_result){
            if(!isset(email_err) && !empty(email_err)){
                reject(Error.database_error());
            }else {
                if(isset(email_result) && !empty(email_result)){
                    reject(Error.invalid_error(messagesString.email_exists));
                }else {
                    resolve(email);
                }
            }
        })
    })
}
*/

newApp.model('user',userSchema) //mongoose.model(<Collectionname>, <CollectionSchema>)