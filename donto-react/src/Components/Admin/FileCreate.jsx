
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Textfield from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { TextField} from '@mui/material';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

const tfStyle = {
  background: 'white',
  color: 'black',
  borderRadius: '10px',
};

const txtBlack = {
  color: 'black'
};


function CreateFile() {
  const [identification, setIdentification] = useState();
  const [names, setNames] = useState();
  const [lastName, setLastName] = useState();
  const [description, setDescription] = useState();
  const classes = useStyles();
  let history = useHistory();
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/registerFile", {identification, names, lastName, description})
    .then((response) => {
        // Manejar la respuesta o redirigir a una página de éxito
        console.log('Usuario creado:', response.data);
        // Puedes redirigir a una página de éxito o a donde necesites
        history.push('/Admin/DashboardPatient');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Container component="main" style={{ maxWidth: 600 }}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" style={txtBlack}>
            Crear Expediente
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Textfield
                  style={tfStyle}
                  variant="filled"
                  fullWidth
                  id="identification"
                  label="Número de Identificación"
                  onChange={(e) => setIdentification(e.target.value)}
                  name="identification"
                />
                {/* {identificationError && (
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
                )} */}
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
                  onChange={(e) => setNames(e.target.value)}
                  autoFocus
                />
                {/* {nameError && (
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
                )} */}
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
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="lname"
                />
                {/* {lastnameError && (
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
                )} */}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  style={tfStyle}
                  variant="filled"
                  fullWidth
                  id="description"
                  label="Descripción"
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                />
                {/* {phoneError && (
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
                )} */}
              </Grid>


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
              Crear expediente
            </Button>
            
          </form>
        </div>
        <Box mt={6}></Box>
      </Container>
    </div>
  );
}

export default CreateFile;