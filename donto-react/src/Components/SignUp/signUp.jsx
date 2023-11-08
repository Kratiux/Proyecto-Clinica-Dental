import React from 'react';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Textfield from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
/* import styles from "./styles.module.css"; */
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

const bgStyle = {
  backgroundColor: '#004CAA',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

const tfStyle = {
  background: 'white',
  color: 'black',
  borderRadius: '10px',
};

const txtWhite = {
  color: 'white'
};




// Reemplaza con la ruta de tu imagen de fondo




const provinces = ['San Jose', 'Alajuela', 'Cartago', 'Heredia', 'Guanacaste', 'Puntarenas', 'Limón'];

const cantonsByProvince = {
  'San Jose': [
    'San Jose', 'Escazu', 'Desamparados', 'Puriscal', 'Tarrazú', 'Aserrí', 'Mora', 'Goicoechea', 'Santa Ana', 'Alajuelita',
    'Vásquez de Coronado', 'Acosta', 'Tibás', 'Moravia', 'Montes de Oca', 'Turrubares', 'Dota', 'Curridabat', 'Pérez Zeledón', 'León Cortés Castro'
  ],
  'Alajuela': [
    'Alajuela', 'San Ramón', 'Grecia', 'San Mateo', 'Atenas', 'Naranjo', 'Palmares', 'Poás', 'Orotina', 'San Carlos',
    'Zarcero', 'Sarchí', 'Upala', 'Los Chiles', 'Guatuso', 'Río Cuarto'
  ],
  'Cartago': [
    'Cartago', 'Paraíso', 'La Unión', 'Jiménez', 'Turrialba', 'Alvarado', 'Oreamuno', 'El Guarco'
  ],
  'Heredia': [
    'Heredia', 'Barva', 'Santo Domingo', 'Santa Bárbara', 'San Rafael', 'San Isidro', 'Belén', 'Flores', 'San Pablo', 'Sarapiquí'
  ],
  'Guanacaste': [
    'Liberia', 'Nicoya', 'Santa Cruz', 'Bagaces', 'Carrillo', 'Cañas', 'Abangares', 'Tilarán', 'Nandayure', 'La Cruz', 'Hojancha'
  ],
  'Puntarenas': [
    'Puntarenas', 'Esparza', 'Buenos Aires', 'Montes de Oro', 'Osa', 'Quepos', 'Golfito', 'Coto Brus', 'Parrita', 'Corredores', 'Garabito'
  ],
  'Limón': [
    'Limón', 'Pococí', 'Siquirres', 'Talamanca', 'Matina', 'Guácimo'
  ],
};

const distritsByCanton = {
  'San Jose': {
    'San Jose': [
      'Carmen', 'Merced', 'Hospital', 'Catedral', 'Zapote', 'San Francisco de Dos Ríos', 'La Uruca', 'Mata Redonda', 'Pavas', 'Hatillo', 'San Sebastián'
    ],
    'Escazu': [
      'Escazu', 'San Antonio', 'San Rafael'
    ],
    'Desamparados': [
      'Desamparados', 'San Miguel', 'San Juan de Dios', 'San Rafael Arriba', 'San Antonio', 'Frailes', 'Patarrá', 'San Cristóbal', 'Rosario', 'Damas',
      'San Rafael Abajo', 'Gravilias', 'Los Guido'
    ],
    'Puriscal': [
      'Santiago', 'Mercedes Sur', 'Barbacoas', 'Grifo Alto', 'San Rafael', 'Candelarita', 'Desamparaditos', 'San Antonio', 'Chires'
    ],
    'Tarrazú': [
      'San Marcos', 'San Lorenzo', 'San Carlos'
    ],
    'Aserrí': [
      'Aserrí', 'Tarbaca', 'Vuelta de Jorco', 'San Gabriel', 'Legua', 'Monterrey', 'Salitrillos'
    ],
    'Mora': [
      'Colón', 'Guayabo', 'Tabarcia', 'Piedras Negras', 'Picagres', 'Jaris', 'Quitirrisí'
    ],
    'Goicoechea': [
      'Guadalupe', 'San Francisco', 'Calle Blancos', 'Mata de Plátano', 'Ipís', 'Rancho Redondo', 'Purral'
    ],
    'Santa Ana': [
      'Santa Ana', 'Salitral', 'Pozos', 'Uruca', 'Piedades', 'Brasil'
    ],
    'Alajuelita': [
      'Alajuelita', 'San Josecito', 'San Antonio', 'Concepción', 'San Felipe'
    ],
    'Vásquez de Coronado': [
      'San Isidro', 'San Rafael', 'Dulce Nombre de Jesús', 'Patalillo', 'Cascajal'
    ],
    'Acosta': [
      'San Ignacio', 'Guaitil', 'Palmichal', 'Cangrejal', 'Sabanillas'
    ],
    'Tibás': [
      'San Juan', 'Cinco Esquinas', 'Anselmo llorente', 'León XIII', 'Colima'
    ],
    'Moravia': [
      'San Vicente', 'San Jerónimo', 'La Trinidad'
    ],
    'Montes de Oca': [
      'San Pedro', 'Sabanilla', 'Mercedes', 'San Rafael'
    ],
    'Turrubares': [
      'San Pablo', 'San Pedro', 'San Juan de Mata', 'San Luis', 'Carara'
    ],
    'Dota': [
      'Santa María', 'Jardín', 'Copey'
    ],
    'Curridabat': [
      'Curridabat', 'Granadilla', 'Sánchez', 'Tirrases'
    ],
    'Pérez Zeledón': [
      'San Isidro de El General', 'El General', 'Daniel Flores', 'Rivas', 'San Pedro', 'Platanares', 'Pejibaye', 'Cajón', 'Barú', 'Río Nuevo', 'Páramo', 'La Amistad'
    ],
    'León Cortés Castro': [
      'San Pablo', 'San Andrés', 'Llano Bonito', 'San Isidro', 'Santa Cruz', 'San Antonio'
    ]

  },
  'Alajuela': {
    'Alajuela': ['Alajuela', 'San José', 'Carrizal', 'San Antonio', 'Guácima', 'San Isidro', 'Sabanilla', 'San Rafael', 'Río Segundo', 'Desamparados', 'Turrúcares', 'Tambor', 'La Garita', 'Sarapiquí'],
    'San Ramón': ['San Ramón', 'Santiago', 'San Juan', 'Piedades Norte', 'Piedades Sur', 'San Rafael', 'San Isidro', 'Ángeles', 'Alfaro', 'Volio', 'Concepción', 'Zapotal', 'Peñas Blancas', 'San Lorenzo'],
    'Grecia': ['Grecia', 'San Isidro', 'San José', 'San Roque', 'Tacares', 'Puente de Piedra', 'Bolívar'],
    'San Mateo': ['San Mateo', 'Desmonte', 'Jesús María', 'Labrador'],
    'Atenas': ['Atenas', 'Jesús', 'Mercedes', 'San Isidro', 'Concepción', 'San José', 'Santa Eulalia', 'Escobal'],
    'Naranjo': ['Naranjo', 'San Miguel', 'San José', 'Cirrí Sur', 'San Jerónimo', 'San Juan', 'El Rosario', 'Palmitos'],
    'Palmares': ['Palmares', 'Zaragoza', 'Buenos Aires', 'Santiago', 'Candelaria', 'Esquipulas', 'La Granja'],
    'Poás': ['San Pedro', 'San Juan', 'San Rafael', 'Carrillos', 'Sabana Redonda'],
    'Orotina': ['Orotina', 'El Mastate', 'Hacienda Vieja', 'Coyolar', 'La Ceiba'],
    'San Carlos': ['Quesada', 'Florencia', 'Buenavista', 'Aguas Zarcas', 'Venecia', 'Pital', 'La Fortuna', 'La Tigra', 'La Palmera', 'Venado', 'Cutris', 'Monterrey', 'Pocosol'],
    'Zarcero': ['Zarcero', 'Laguna', 'Tapesco', 'Guadalupe', 'Palmira', 'Zapote', 'Brisas'],
    'Sarchí': ['Sarchí Norte', 'Sarchí Sur', 'Toro Amarillo', 'San Pedro', 'Rodríguez'],
    'Upala': ['Upala', 'Aguas Claras', 'San José (Pizote)', 'Bijagua', 'Delicias', 'Dos Ríos', 'Yolillal', 'Canalete'],
    'Los Chiles': ['Los Chiles', 'Caño Negro', 'El Amparo', 'San Jorge'],
    'Guatuso': ['San Rafael', 'Buenavista', 'Cote', 'Katira'],
    'Río Cuarto': ['Río Cuarto', 'Santa Rita', 'Santa Isabel']
  },


  'Cartago': {


    'Cartago': ['Oriental', 'Occidental', 'Carmen', 'San Nicolás', 'Aguacaliente', 'Guadalupe', 'Corralillo', 'Tierra Blanca', 'Dulce Nombre', 'Llano Grande', 'Quebradilla'],
    'Paraíso': ['Paraíso', 'Santiago', 'Orosi', 'Cachí', 'Llanos de Santa Lucía'],
    'La Unión': ['Tres Ríos', 'San Diego', 'San Juan', 'San Rafael', 'Concepción', 'Dulce Nombre', 'San Ramón', 'Río Azul'],
    'Jiménez': ['Juan Viñas', 'Tucurrique', 'Pejibaye', 'La Victoria'],
    'Turrialba': ['Turrialba', 'La Suiza', 'Peralta', 'Santa Cruz', 'Santa Teresita', 'Pavones', 'Tuis', 'Tayutic', 'Santa Rosa', 'Tres Equis', 'La Isabel', 'Chirripó'],
    'Alvarado': ['Pacayas', 'Cervantes', 'Capellades'],
    'Oreamuno': ['San Rafael', 'Cot', 'Potrero Cerrado', 'Cipreses', 'Santa Rosa'],
    'El Guarco': ['El Tejar', 'San Isidro', 'Tobosi', 'Patio de Agua']


  },


  'Heredia': {

    'Heredia': ['Heredia', 'Mercedes', 'San Francisco', 'Ulloa', 'Varablanca'],
    'Barva': ['Barva', 'San Pedro', 'San Pablo', 'San Roque', 'Santa Lucía', 'San José de la Montaña'],
    'Santo Domingo': ['Santo Domingo', 'San Vicente', 'San Miguel', 'Paracito', 'Santo Tomás', 'Santa Rosa', 'Tures', 'Pará'],
    'Santa Bárbara': ['Santa Bárbara', 'San Pedro', 'San Juan', 'Jesús', 'Santo Domingo', 'Purabá'],
    'San Rafael': ['San Rafael', 'San Josecito', 'Santiago', 'Ángeles', 'Concepción'],
    'San Isidro': ['San Isidro', 'San José', 'Concepción', 'San Francisco'],
    'Belén': ['San Antonio', 'La Ribera', 'La Asunción'],
    'Flores': ['San Joaquín', 'Barrantes', 'Llorente'],
    'San Pablo': ['San Pablo', 'Rincón de Sabanilla'],
    'Sarapiquí': ['Puerto Viejo', 'La Virgen', 'Horquetas', 'Llanuras del Gaspar', 'Cureña']

  },

  'Guanacaste': {

    'Liberia': ['Liberia', 'Cañas Dulces', 'Mayorga', 'Nacascolo', 'Curubandé'],
    'Nicoya': ['Nicoya', 'Mansión', 'San Antonio', 'Quebrada Honda', 'Sámara', 'Nosara', 'Belén de Nosarita'],
    'Santa Cruz': ['Santa Cruz', 'Bolsón', 'Veintisiete de Abril', 'Tempate', 'Cartagena', 'Cuajiniquil', 'Diriá', 'Cabo Velas', 'Tamarindo'],
    'Bagaces': ['Bagaces', 'La Fortuna', 'Mogote', 'Río Naranjo'],
    'Carrillo': ['Filadelfia', 'Palmira', 'Sardinal', 'Belén'],
    'Cañas': ['Cañas', 'Palmira', 'San Miguel', 'Bebedero', 'Porozal'],
    'Abangares': ['Las Juntas', 'Sierra', 'San Juan', 'Colorado'],
    'Tilarán': ['Tilarán', 'Quebrada Grande', 'Tronadora', 'Santa Rosa', 'Líbano', 'Tierras Morenas', 'Arenal', 'Cabeceras'],
    'Nandayure': ['Carmona', 'Santa Rita', 'Zapotal', 'San Pablo', 'Porvenir', 'Bejuco'],
    'La Cruz': ['La Cruz', 'Santa Cecilia', 'La Garita', 'Santa Elena'],
    'Hojancha': ['Hojancha', 'Monte Romo', 'Puerto Carrillo', 'Huacas', 'Matambú']


  },


  'Puntarenas': {

    'Puntarenas': ['Puntarenas', 'Pitahaya', 'Chomes', 'Lepanto', 'Paquera', 'Manzanillo', 'Guacimal', 'Barranca', 'Isla del Coco', 'Cóbano', 'Chacarita', 'Chira', 'Acapulco', 'El Roble', 'Arancibia'],
    'Esparza': ['Espíritu Santo', 'San Juan Grande', 'Macacona', 'San Rafael', 'San Jerónimo', 'Caldera'],
    'Buenos Aires': ['Buenos Aires', 'Volcán', 'Potrero Grande', 'Boruca', 'Pilas', 'Colinas', 'Chánguena', 'Biolley', 'Brunka'],
    'Montes de Oro': ['Miramar', 'La Unión', 'San Isidro'],
    'Osa': ['Puerto Cortés', 'Palmar', 'Sierpe', 'Bahía Ballena', 'Piedras Blancas', 'Bahía Drake'],
    'Quepos': ['Quepos', 'Savegre', 'Naranjito'],
    'Golfito': ['Golfito', 'Guaycará', 'Pavón'],
    'Coto Brus': ['San Vito', 'Sabalito', 'Aguabuena', 'Limoncito', 'Pittier', 'Gutiérrez Braun'],
    'Parrita': ['Parrita'],
    'Corredores': ['Corredor', 'La Cuesta', 'Canoas', 'Laurel'],
    'Garabito': ['Jacó', 'Tárcoles', 'Lagunillas'],
    'Monteverde': ['Monteverde'],
    'Puerto Jiménez': ['Puerto Jiménez']

  },

  'Limón': {

    'Limón': ['Limón', 'Valle La Estrella', 'Río Blanco', 'Matama'],
    'Pococí': ['Guápiles', 'Jiménez', 'La Rita', 'Roxana', 'Cariari', 'Colorado', 'La Colonia'],
    'Siquirres': ['Siquirres', 'Pacuarito', 'Florida', 'Germania', 'El Cairo', 'Alegría', 'Reventazón'],
    'Talamanca': ['Bratsi', 'Sixaola', 'Cahuita', 'Telire'],
    'Matina': ['Matina', 'Batán', 'Carrandi'],
    'Guácimo': ['Guácimo', 'Mercedes', 'Pocora', 'Río Jiménez', 'Duacarí']

  }


};

export default function SignUp() {
  const [province, setProvince] = useState('');
  const [canton, setCanton] = useState('');
  const [distrit, setDistrit] = useState('');

  const cantonOptions = cantonsByProvince[province] || [];
  const distritOptions = distritsByCanton[province]?.[canton] || [];



  const classes = useStyles();

  const history = useHistory();

  // Estado para los nuevos atributos
  const [identification, setIdentification] = useState('');
  const [identificationType, setIdentificationType] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');



  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [identificationError, setIdentificationError] = useState('');
  const [identificationTypeError, setIdentificationTypeError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [provinceError, setProvinceError] = useState('');
  const [cantonError, setCantonError] = useState('');
  const [distritError, setDistritError] = useState('');
  const [birthdayError, setBirthdayError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const identificationRegex = /^\d+$/;
  const nameRegex = /^[A-Z][a-z]*$/;
  const lastnameRegex = /^[A-Z][a-z]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d+$/;

  const handleGenderChange = (e) => {
    const value = e.target.value;
    setGender(value);
    if (!value) {
      setGenderError('Este campo es obligatorio');
    } else {
      setGenderError('');
    }
  }

  const handleIdentificationTypeChange = (e) => {
    const value = e.target.value;
    setIdentificationType(value);
    if (!value) {
      setIdentificationTypeError('El tipo de identificación es obligatorio');
    } else {
      setIdentificationTypeError('');
    }
  }

  const handleProvinceChange = (e) => {
    const value = e.target.value;
    setProvince(value);
    if (!value) {
      setProvinceError('La provincia es obligatoria');
    } else {
      setProvinceError('');
    }
  }

  const handleCantonChange = (e) => {
    const value = e.target.value;
    setCanton(value);
    if (!value) {
      setCantonError('El cantón es obligatorio');
    } else {
      setCantonError('');
    }
  }

  const handledistritChange = (e) => {
    const value = e.target.value;
    setDistrit(value);
    if (!value) {
      setDistritError('El distrito es obligatorio');
    } else {
      setDistritError('');
    }
  }
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setBirthday(selectedDate);
    if (selectedDate) {
      setBirthdayError('');
    }
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    let isValid = true;
    setIsSubmitting(true);



    if (!birthday) {
      setBirthdayError('La fecha de nacimiento es obligatoria');
      isValid = false;
    } else {
      setBirthdayError(''); // Reinicia el mensaje de error si el campo es válido
    }

    if (!province) {
      setProvinceError('La provincia es obligatoria');
      isValid = false;
    } else {
      setProvinceError(''); // Reinicia el mensaje de error si el campo es válido
    }

    if (!distrit) {
      setDistritError('El cantón es obligatorio');
      isValid = false;
    } else {
      setDistritError(''); // Reinicia el mensaje de error si el campo es válido
    }


    if (!canton) {
      setCantonError('El distrito es obligatorio');
      isValid = false;
    } else {
      setCantonError('');
    }

    if (!identificationType) {
      setIdentificationTypeError('El tipo de identificación es obligatorio');
      isValid = false;
    } else {
      setIdentificationTypeError('');
    }


    if (!identificationRegex.test(identification) || identification.length < 9) {
      setIdentificationError('La identificación debe contener al menos 10 dígitos y solo números.');
      isValid = false;
    } else {
      setIdentificationError('');
    }




    if (!nameRegex.test(name)) {
      setNameError('El nombre debe comenzar con una letra mayúscula y contener solo letras minúsculas.');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validación de apellido (solo letras, primera letra en mayúscula)

    if (!lastnameRegex.test(lastname)) {
      setLastnameError('El apellido debe comenzar con una letra mayúscula y contener solo letras minúsculas.');
      isValid = false;
    } else {
      setLastnameError('');
    }

    if (
      password.length < 8 || // Mínimo 8 caracteres
      !/[A-Za-z]/.test(password) || // Al menos una letra
      !/\d/.test(password) || // Al menos un número
      !/[!@#$%^&*(),.?":{}|<>]/.test(password) // Al menos un carácter especial
    ) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres y contener al menos una letra, un número y un carácter especial.');
      isValid = false;

    } else {
      setPasswordError('');
    }


    if (!emailRegex.test(email)) {
      setEmailError('El formato del correo electrónico no es válido.');
      isValid = false;
    } else {
      setEmailError('');
    }


    if (!phoneRegex.test(phone) || phone.length < 7) { // Cambio en la validación
      setPhoneError('El número de teléfono debe contener al menos 8 dígitos y solo números.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!gender) {
      setGenderError('Este campo es obligatorio');
      isValid = false;
      return;
    }


    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('El campo de confirmación de contraseña está vacío');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Las contraseñas no coinciden');
      isValid = false;
    } else {
      setConfirmPasswordError(''); // Borra el mensaje de error si las contraseñas coinciden
    }

    if (!province) {
      setProvinceError('Este campo es obligatorio');
      isValid = false;
    } else {
      setProvinceError(''); // Reinicia el mensaje de error si el campo es válido
    }


    if (isValid) {
      axios
        .post('http://localhost:3001/register', {
          name,
          lastname,
          email,
          password,
          identification,
          phone,
          birthday,
          gender,
          province,
          canton,
          distrit,
          identificationType,
          confirmPassword,
        })
        .then((result) => {
          console.log(result);
          if (result.data === 'Usuario creado') {
            history.push('/SignIn/signin');
            Swal.fire({
              title: 'Exitoso',
              text: 'Agregado exitosamente',
              icon: 'success',
            });
          } else if (result.data === 'Hay campos vacios') {
            Swal.fire({
              title: 'Error',
              text: 'Por favor llene todos los campos',
              icon: 'error',
            });
          } else if (result.data === 'El correo y la identificación ya existen') {
            Swal.fire({
              title: 'Error',
              text: 'Ya un usuario existe con este correo y identificacion!',
              icon: 'error',
            });
          } else if (result.data === 'El correo ya existe') {
            Swal.fire({
              title: 'Error',
              text: 'Ya un usuario existe con este correo!',
              icon: 'error',
            });
          } else if (result.data === 'La identificación ya existe') {
            Swal.fire({
              title: 'Error',
              text: 'Ya un usuario existe con esta identificacion!',
              icon: 'error',
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };


  return (
    <div style={bgStyle}>
      <Container component="main" style={{ maxWidth: 600 }}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h5" style={txtWhite}>
            Registrarse
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant="filled" fullWidth style={tfStyle}>
                  <InputLabel id="identificationType-label">Seleccione tipo de Identificacion</InputLabel>
                  <Select
                    labelId="identificationType-label"
                    id="identificationType"
                    value={identificationType}
                    onChange={handleIdentificationTypeChange}
                    label="IdentificationType"
                  >
                    <MenuItem value="Fisica">Nacional</MenuItem>
                    <MenuItem value="Pasaporte">Pasaporte</MenuItem>
                    <MenuItem value="Documento Migratorio">Documento Migratorio</MenuItem>

                  </Select>
                </FormControl>
                {isSubmitting && !identificationType && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {identificationTypeError}
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <Textfield
                  style={tfStyle}
                  variant="filled"
                  fullWidth
                  id="identification"
                  label="Número de Identificación"
                  onChange={(e) => {
                    const value = e.target.value;
                    setIdentification(value);
                    if (identificationRegex.test(value)) {
                      setIdentificationError(''); // Clear the error message
                    }
                  }}
                  name="identification"
                />
                {identificationError && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {identificationError}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={tfStyle}
                  autoComplete="fname"
                  name="firstName"
                  variant="filled"
                  required
                  fullWidth
                  id="firstName"
                  label="Primer Nombre"
                  onChange={(e) => {
                    const value = e.target.value;
                    setName(value);
                    if (nameRegex.test(value)) {
                      setNameError(''); // Clear the error message
                    }
                  }}
                  autoFocus
                />
                {nameError && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {nameError}
                  </div>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  style={tfStyle}
                  variant="filled"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  onChange={(e) => {
                    const value = e.target.value;
                    setLastname(value);
                    if (lastnameRegex.test(value)) {
                      setLastnameError(''); // Clear the error message
                    }
                  }}
                  autoComplete="lname"
                />
                {lastnameError && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {lastnameError}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  style={tfStyle}
                  variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Correo"
                  name="email"
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                    if (emailRegex.test(value)) {
                      setEmailError(''); // Clear the error message
                    }
                  }}
                  autoComplete="email"
                />
                {emailError && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {emailError}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  style={tfStyle}
                  variant="filled"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);
                    if (value.length >= 8 && /[A-Za-z]/.test(value) && /\d/.test(value) && /[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                      setPasswordError(''); // Borra el mensaje de error si la contraseña es válida
                    } else {
                      setPasswordError('La contraseña debe contener al menos 8 caracteres, una letra, un número y un carácter especial.');
                    }
                  }}
                  autoComplete="current-password"
                />
                {passwordError && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {passwordError}
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={tfStyle}
                  variant="filled"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmar Contraseña"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    setConfirmPassword(value);
                    if (value === password) {
                      setConfirmPasswordError(''); // Borra el mensaje de error si la confirmación coincide con la contraseña
                    } else {
                      setConfirmPasswordError('Las contraseñas no coinciden');
                    }
                  }}
                />
                {confirmPasswordError && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {confirmPasswordError}
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={tfStyle}
                  variant="filled"
                  fullWidth
                  id="phone"
                  label="Número de Teléfono"
                  onChange={(e) => {
                    const value = e.target.value;
                    setPhone(value);
                    if (phoneRegex.test(value)) {
                      setPhoneError(''); // Clear the error message
                    }
                  }}
                  name="phone"
                />
                {phoneError && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {phoneError}
                  </div>
                )}
              </Grid>

              <Grid item xs={12}>
                <Textfield
                  style={tfStyle}
                  variant="filled"
                  type="date"
                  fullWidth
                  id="birthday"
                  label="Fecha de Nacimiento"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="birthday"
                  value={birthday}
                  onChange={handleDateChange}
                />
                {isSubmitting && birthdayError && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {birthdayError}
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="filled" fullWidth style={tfStyle}>
                  <InputLabel id="gender-label">Género</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    value={gender}
                    label="Género"
                    onChange={handleGenderChange}
                  >
                    <MenuItem value="No especificado">No especificar</MenuItem>
                    <MenuItem value="Masculino">Masculino</MenuItem>
                    <MenuItem value="Femenino">Femenino</MenuItem>
                  </Select>
                </FormControl>
                {isSubmitting && !gender && (
                  <div style={{
                    textAlign: 'left',
                    color: '#f2a4a4',
                    fontSize: '15px',
                    fontWeight: 'normal',
                    borderRadius: '5px',
                    marginTop: '4px',
                    marginBottom: '4px',
                  }}>
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                      paddingTop: '1px',
                      paddingRight: '4px',
                      width: '15px',
                    }} />
                    {genderError}
                  </div>
                )}
              </Grid>
              <Grid container spacing={2}>
                {/* Dropdown de Provincia */}
                <Grid item xs={4}>
                  <FormControl variant="filled" fullWidth style={tfStyle}>
                    <InputLabel id="province-label">Provincia</InputLabel>
                    <Select
                      labelId="province-label"
                      id="province"
                      value={province}
                      label="Provincia"
                      onChange={handleProvinceChange}
                    >
                      <MenuItem value="">Seleccionar provincia</MenuItem>
                      {provinces.map((prov) => (
                        <MenuItem key={prov} value={prov}>
                          {prov}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {isSubmitting && !province && (
                    <div style={{
                      textAlign: 'left',
                      color: '#f2a4a4',
                      fontSize: '15px',
                      fontWeight: 'normal',
                      borderRadius: '5px',
                      marginTop: '4px',
                      marginBottom: '4px',
                    }}>
                      <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                        paddingTop: '1px',
                        paddingRight: '4px',
                        width: '15px',
                      }} />
                      {provinceError}
                    </div>
                  )}
                </Grid>
                {/* Dropdown de Cantón */}
                <Grid item xs={4}>
                  <FormControl variant="filled" fullWidth style={tfStyle}>
                    <InputLabel id="canton-label">Cantón</InputLabel>
                    <Select
                      labelId="canton-label"
                      id="canton"
                      value={canton}
                      onChange={handleCantonChange}
                      label="Cantón"
                      disabled={!province} // Deshabilitar si no se ha seleccionado una provincia
                    >
                      <MenuItem value="">Seleccionar cantón</MenuItem>
                      {cantonOptions.map((can) => (
                        <MenuItem key={can} value={can}>
                          {can}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {isSubmitting && !canton && (
                    <div style={{
                      textAlign: 'left',
                      color: '#f2a4a4',
                      fontSize: '15px',
                      fontWeight: 'normal',
                      borderRadius: '5px',
                      marginTop: '4px',
                      marginBottom: '4px',
                    }}>
                      <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                        paddingTop: '1px',
                        paddingRight: '4px',
                        width: '15px',
                      }} />
                      {cantonError}
                    </div>
                  )}
                </Grid>
                {/* Dropdown de Distrito */}
                <Grid item xs={4}>
                  <FormControl variant="filled" fullWidth style={tfStyle}>
                    <InputLabel id="distrit-label">Distrito</InputLabel>
                    <Select
                      labelId="distrit-label"
                      id="distrit"
                      value={distrit}
                      onChange={handledistritChange}
                      label="Distrito"
                      disabled={!canton} // Deshabilitar si no se ha seleccionado un cantón
                    >
                      <MenuItem value="">Seleccionar distrito</MenuItem>
                      {distritOptions.map((dist) => (
                        <MenuItem key={dist} value={dist}>
                          {dist}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {isSubmitting && !distrit && (
                    <div style={{
                      textAlign: 'left',
                      color: '#f2a4a4',
                      fontSize: '15px',
                      fontWeight: 'normal',
                      borderRadius: '5px',
                      marginTop: '4px',
                      marginBottom: '4px',
                    }}>
                      <img src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" style={{
                        paddingTop: '1px',
                        paddingRight: '4px',
                        width: '15px',
                      }} />
                      {distritError}
                    </div>
                  )}
                </Grid>
              </Grid>
              {/* Fin de los nuevos campos */}

            </Grid>
            {/* {error && <div className={styles.error_msg}>{error}</div>} */}
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn/signIn" variant="body2" style={txtWhite}>
                  ¿Ya tiene una cuenta? Inicia Sesión
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={6}></Box>
      </Container>
    </div>
  );
}