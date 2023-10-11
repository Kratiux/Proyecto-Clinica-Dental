
const mongoose = require("mongoose");
/* const joi = require('joi'); */
const jwt = require('jsonwebtoken');
/* const passwordComplexity = require('joi-password-complexity'); */


const UserSchema = new mongoose.Schema({

    identification: {type: Number, require: false, unique: false},
    name: {type: String, require: true, unique: false},
    lastName: {type: String, require: true, unique: false},
    phone: {type: Number, require: true, unique: false},
    birthday: {type: Date, require: true, unique: false},
    gender: {type: String, require: true, unique: false},
    email: {type: String, require: false, unique: false},
    password: {type: String, require: false, unique: false},
    province: {type: String, require: false, unique: false},
    canton: {type: String, require: false, unique: false},
    distrit: {type: String, require: false, unique: false},
    img: {type: String, require: true, unique: false}

});

UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn: "7d"});
    return token
};

const UserModel = mongoose.model("users",UserSchema);

module.exports= UserModel

/* 
const validate = (data) => {
    const schema = joi.object({
        firstName: joi.string().require().label("First Name"),
        lastName: joi.string().require().label("Last Name"),
        phone: joi.string().require().label("Phone"),
        birthday: joi.string().require().label("Birthday"),
        gender: joi.string().require().label("Gender"),
        email: joi.string().require().label("Email"),
        password: passwordComplexity().require().label("Password"),
        province: joi.string().require().label("Province"),
        canton: joi.string().require().label("Canton"),
        distrit: joi.string().require().label("Distrit")
    });
    return schema.validate(data)
};

module.exports = {UserModel, validate}; */