
const express = require('express');
const router = express.Router();
const User = require('../models/users.model');
const bcrypt = require('bcrypt')
const specialChars = /[!@#$%^&*(),.?":{}|<>]/; // Definimos una expresión regular para caracteres especiales


router.post('/register', async(req, res) => {


  const { identification, name,lastname, email, password, phone, birthday, gender, province, canton, distrit,identificationType,confirmPassword } = req.body;
  /* const { identification, email } = req.body; */
  

try {
const existingEmailUser = await User.findOne({ email });
const existingIdentificationUser = await User.findOne({ identification });


bcrypt.hash(password, 10)
  .then(hash => {
      User.create({ identification, name,lastname, email, password: hash, phone, birthday, gender, province, canton, distrit,identificationType })
          
  }).catch(err => console.log(err.message))

if(!!!identification || !!!name || !!!lastname || !!!email || !!!password || !!!phone || !!!birthday || !!!gender || !!!province || !!!canton || !!!distrit || !!!identificationType || !!!confirmPassword){
  return res.json("Hay campos vacios");
} if (existingEmailUser && existingIdentificationUser) {
return res.json("El correo y la identificación ya existen");
} else if (existingEmailUser) {
return res.json("El correo ya existe");
} else if (existingIdentificationUser) {
return res.json("La identificación ya existe");
} 
return res.status(200).send("Usuario creado");

} catch (err) {
return res.json(err);
}
});



module.exports = router;