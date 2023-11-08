const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')
require('dotenv').config();
const UserModel = require('./models/users.model');
const FileModel = require('./models/file.model');



const UserRoute = require('./routes/users.route');
const LoginRoute = require('./routes/login.route');

app.use(express.json());
app.use(cors({

  origin: ["http://localhost:3000"],    //allow the frontend
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true

}))
app.use(cookieParser())
app.use('/', UserRoute);
app.use('/', LoginRoute);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);






app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true'); // Si necesitas enviar cookies o autenticación

  // Opcional: Configura las cabeceras máximas permitidas en la respuesta
  res.header('Access-Control-Expose-Headers', 'Content-Type, Authorization');

  next();
});

app.post('/registerFile', (req, res) => {

  FileModel.create(req.body)
    .then(files => res.json(files))
    .catch(err => res.json(err))
});

app.get('/fileGet', (req, res) => {

  FileModel.find({})
    .then(files => res.json(files))
    .catch(err => res.json(err))


})

app.get('/getFile/:id', (req, res) => {
  const id = req.params.id; // Usar la variable id en lugar de _id

  FileModel.findById({ _id: id })
    .then(files => res.json(files))
    .catch(err => res.json(err))
});

app.put('/updateFile/:id', (req, res) => {
  const id = req.params.id;
  FileModel.findByIdAndUpdate({ _id: id }, {
    identification: req.body.identification,
    names: req.body.names,
    lastName: req.body.lastName,
    description: req.body.description
  })
    .then(files => res.json(files))
    .catch(err => res.json(err))
});

app.delete('/deleteFile/:id', (req, res) => {
  const id = req.params.id;

  FileModel.findByIdAndDelete(id) // No necesitas { _id: id } aquí
    .then((deletedFile) => {
      if (!deletedFile) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      return res.json({ message: "Usuario eliminado con éxito", deletedFile });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});


app.get('/', (req, res) => {

  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))


})


app.get('/getUser/:id', (req, res) => {
  const id = req.params.id; // Usar la variable id en lugar de _id

  UserModel.findById({ _id: id })
    .then(files => res.json(files))
    .catch(err => res.json(err))
});


app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;

  UserModel.findByIdAndDelete(id) // No necesitas { _id: id } aquí
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      return res.json({ message: "Usuario eliminado con éxito", deletedUser });
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});




app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({ _id: id }, {
    names: req.body.names,
    lastName: req.body.lastName,
    phone: req.body.phone,
    birthday: req.body.birthday,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
    province: req.body.province,
    canton: req.body.canton,
    distrit: req.body.distrit,
    role: req.body.role
  })
    .then(files => res.json(files))
    .catch(err => res.json(err))
});






app.listen(3001, () => {

  console.log("server is running")
});

//app.use('/backend', users);

//app.use(authRoutes);