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




const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export default function SignIn() {

 






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
  const [failedPasswordAttempts, setFailedPasswordAttempts] = useState(0);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const validateEmail = (email) => {
    
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
  };

  

  axios.defaults.withCredentials = true;

  
  const handleSubmit = (e) => {
    e.preventDefault();
   

    if (email.trim() === '' || password.trim() === '') {
      // Mostrar un mensaje de error indicando que los campos están vacíos
      setEmailError('El correo es requerido');
      setPasswordError('La contraseña es requerida');
      return; // Salir de la función para evitar el envío de la solicitud si los campos están vacíos
    }else{



    axios.post('http://localhost:3001/login', { email, password })
        .then(result => {
            console.log(result);

            let isValid = true;

            if (!validateEmail(email)) {
              setEmailError('No es un formato de correo válido');
              return;
            }
                  
            // Check the number of failed password attempts.
            if (failedPasswordAttempts >= 3) {
              // If there are 3 or more failed attempts, redirect to the Forgot Password page.
              history.push('/forgot-password');
              return; // Exit the function to prevent further processing.
            }
          
            if (
              password.length < 8 ||
              !/[A-Za-z]/.test(password) ||
              !/\d/.test(password) ||
              !/[!@#$%^&*(),.?":{}|<>]/.test(password)
            ) {
              setPasswordError('La contraseña esta incorrecta.');
              isValid = false;
          
              // Increment the failed password attempts count.
              setFailedPasswordAttempts(failedPasswordAttempts + 1);
            } else {
              setPasswordError('');
          
              // Reset the failed password attempts count when the user enters a valid password.
              setFailedPasswordAttempts(0);
            }
          
            // Rest of your code...
              
          
            
            if (result.data.Status === "Success") {
              //   history.push('/Admin/Dashboard');
              //   Swal.fire({
              //     title: 'Bienvenido',
              //     text: 'Bienvenido',
              //     icon: 'Check'
              // });

              if (result.data.role === "admin") {

                history.push('/Admin/Dashboard');
            } else {
  
              history.push('/SignUp/signUp')
            }
            } else if (result.data.Status === 'the password is incorrect') {
            
              Swal.fire({
                title: 'Error',
                text: 'La contraseña es incorrecta',
                icon: 'error',
              });
            } else if (result.data.Status === "no record existed") {
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

      }
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
          Iniciar Sesión
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
            onChange={(e) => { setEmail (e.target.value)}
           }
           onClick={() => {
            if (emailError) {
              setEmailError(''); // Clear the error message when clicked
            }
          }}
            autoComplete="email"
            autoFocus
          /> 
          {emailError && (
    <div style={{ 
      backgroundColor: 'lightcoral',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '10px',
      border: '2px solid red',
      borderRadius: '5px',
      marginTop: '10px',
    }}>
      {emailError}
    </div>
  )}
          <Textfield
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            onClick={() => {
              if (passwordError) {
                setPasswordError(''); // Borrar el mensaje de error al hacer clic en el campo
              }
            }}
          />{passwordError && (
            <div style={{ 
              backgroundColor: 'lightcoral',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '10px',
              border: '2px solid red',
              borderRadius: '5px',
              marginTop: '10px',
            }}>
              {passwordError}
            </div>
          )}
             

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
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
            Iniciar Sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidó la contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp/signUp" variant="body2">
                {"No tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
          <div container>
          
              <Link href="/" variant="body2">
                {"Volver"}
              </Link>
            
          </div>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}