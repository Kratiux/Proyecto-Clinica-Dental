
const mongoose = require("mongoose");
/* const joi = require('joi'); */
const jwt = require('jsonwebtoken');
/* const passwordComplexity = require('joi-password-complexity'); */


const UserSchema = new mongoose.Schema({

    identification: {type: Number, require: false, unique: false},
    identificationType :{type: String, require: true, unique: false},
    name: {type: String, require: true, unique: false},
    lastName: {type: String, require: true, unique: false},
    phone: {type: Number, require: true, unique: false},
    birthday: {type: Date, require: true, unique: false},
    gender: {type: String, require: true, unique: false},
    email: {type: String, require: false, unique: false},
    password: {type: String, require: false, unique: false},
    confirmPassword : {type: String, require: false, unique: false},
    province: {type: String, require: false, unique: false},
    canton: {type: String, require: false, unique: false},
    distrit: {type: String, require: false, unique: false},
    img: {type: String, require: true, unique: false},
    role:{

        type: String,
        default: "visitor"
    }

});



const UserModel = mongoose.model("users",UserSchema);

module.exports= UserModel

