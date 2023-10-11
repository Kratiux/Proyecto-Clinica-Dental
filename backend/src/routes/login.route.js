const express = require('express');
const router = express.Router();
const User = require('../models/users.model');
const Joi = require('joi');
const bcrypt = require('bcrypt');



router.post("/login", async(req, res) => {


    /* try {
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message});

            const user = await User.findOne({ email: req.body.email});
            if(!user)
                return res.status(401).send({ message: "Invalid Email or Password"});

            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            );

            if(!validPassword)
                return res.status(401).send({message: "Invalid Email or Password"});

            const token = user.generateAuthToken();
            res.status(200).send({data: token, message: "Logged in successfully"});
    } catch (error) {
        res.status(500).send({ message:"Internal Server Error"});
    }

    const validate = (data) => {
        const schema = Joi.object({
            email: Joi.string().email().required().label("Email"),
            password: Joi.string().email().required().label("Password"),
        });
        return schema.validate(data);
    } */


    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {

            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {

                    if (response) {
                        res.json("Success")
                    }else{

                         res.json("the password is incorrect")
                    }
                })
         } else {
                res.json("no record existed")
            }

        })
        });

module.exports = router;