
const mongoose = require("mongoose");
/* const joi = require('joi'); */
const jwt = require('jsonwebtoken');
/* const passwordComplexity = require('joi-password-complexity'); */


const FileSchema = new mongoose.Schema({

    identification: {type: String, require: true, unique: false},
    names: {type: String, require: true, unique: false},
    lastName: {type: String, require: true, unique: false},
    description: {type: String, require: true, unique: false},
    
    

});



const FileModel = mongoose.model("files",FileSchema);

module.exports= FileModel

