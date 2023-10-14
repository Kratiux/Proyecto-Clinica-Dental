import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Textfield from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));






export default function Contra() {

  const classes = useStyles();
  let history = useHistory();

  /*   const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
  
    const handleChange = ({ currentTarget: Textfield }) => {
      setData({ ...data, [Textfield.name]: Textfield.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = "http://localhost:3001/login";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        history.push('/Admin/Dashboard');
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }; */


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          history.push('/Admin/Dashboard');
          Swal.fire({
            title: 'Bienvenido',
            text: 'Bienvenido',
            icon: 'Check'
          });
        } else if (result.data === "the password is incorrect") {
          Swal.fire({
            title: 'Error',
            text: 'Incorrect password',
            icon: 'error'
          });
        } else if (result.data === "no record existed") {
          Swal.fire({
            title: 'Error',
            text: 'No record exists',
            icon: 'error'
          });
        } else {
          // Manejar otros casos de respuesta del servidor aquí
        }
      })
      .catch(err => {
        console.log(err);
        // Manejar errores de red u otros errores aquí
      });
    // Aquí puedes implementar la lógica para procesar el inicio de sesión
    // Puedes enviar los datos (nombre, correo, contraseña) a tu servidor para autenticación.
  };









  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography component="h1" variant="h5">
          Recuperar Contraseña
        </Typography>
        <form className={classes.form} noValidate>
          <Textfield
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          {/*  {error && <div className={styles.error_msg}>{error}</div>} */}
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Recuperar Contraseña
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}