
const express = require('express');
const router = express.Router();
const User = require('../models/users.model');

router.post('/register-user', (req, res) => {
    let body = req.body;
    let newUser = new User({
        identification: body.identification,
        name: body.name,
        lastName: body.lastName,
        phone: body.phone,
        birthday: body.birthday,
        gender: body.gender,
        email: body.email,
        password: body.password,
        confirmPassword: body.confirmPassword,
        province: body.province,
        canton: body.canton,
        distrit: body.distrit,
        img: body.img
    });


    newUser.save((err, userDB) => {
        if(err){
            res.json({
                result: false,
                msg: "El usuario no pudo ser registrado por el siguiente error: ",
                error: err
            });
        }else{

            res.json({
                result: true,
                msg: "El siguiente usuario se registro correctamente: ",
                userDB
            });
        }
    });



});