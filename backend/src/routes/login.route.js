const express = require('express');
const router = express.Router();
const User = require('../models/users.model');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const cors = require("cors")



router.use(express.json())
router.use(cors({

    origin: "http://localhost:3000", //allow the frontend
    methods: ["GET", "POST"],
    credentials: true
    
    }))
    router.use(cookieParser())


    const verifyUser = (req,res,next) => {


        const token = req.cookies.token;
        if (!token){
    
            return res.json("The token was not available ")
        }else{
            jwt.verify(token, "jwt-secret-key",(err,decoded) => {
    
              if (err) return res.json("Token is wrong")
              next();
    
    
    
            })
        }
        
        } 
        
        
        router.get('/home', verifyUser,(req,res) => {
        
        return res.json("success")
        
        })






router.post("/login", async(req, res) => {


    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {

            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {

                    if (response) {
                       const token = jwt.sign({email: user.email,role: user.role}, "jwt-secret-key",{expiresIn:"1d"})
                         //generate the token asign the email to user.emai, and secret key it is secret, expire 1 day
                         res.cookie("token", token, { sameSite: "None", secure: true});
                         //store the token in the cookie 
                        console.log(token);
                        return res.json({Status:"Success", role: user.role})
                    }else{

                        return res.json("the password is incorrect")
                    }
                })
         } else {
            return res.json("no record existed")
            }

        })
        })

module.exports = router;