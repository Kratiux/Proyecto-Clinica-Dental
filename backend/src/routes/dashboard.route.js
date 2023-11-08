const express = require('express');
const router = express.Router();
const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const { verify } = require('jsonwebtoken');


const varifyUser = (req, res, next) => {

    const token = req.cookie.token;

    if (!token) {

        return res.json("Token is missing ")

    } else {

        jwt.verify(token, "jwt-secret-key", (err, decoded){

            if (err) {


                return res.json("Error with token")
            } else {

                if (decoded.role === "admin") {
                    next()


                } else {
                    return res.json("not admin")
                }

            }


        })
    }


}


router.get('/dashboard', varifyUser, (req, res) => {

    res.json("Success")
})



module.exports = router;