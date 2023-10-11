const express= require ("express");
const mongoose= require ("mongoose");
const cors= require ("cors");
const app = express();
require('dotenv').config();


const UserRoute = require('./routes/users.route');
const LoginRoute = require('./routes/login.route');

app.use(express.json());
app.use(cors());
app.use('/', UserRoute);
app.use('/', LoginRoute);

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);


app.listen(3001, ()=> {

    console.log("server is running")
});

//app.use('/backend', users);

//app.use(authRoutes);