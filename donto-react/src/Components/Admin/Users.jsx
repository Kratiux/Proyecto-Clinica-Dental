import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function UserList() {
  const [users, setUsers] = useState([]);




  useEffect(() => {
    axios.get('https://api.clinicadentalsofiacastro.com/')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);




  const handleDelete = (id) => {

    axios.delete('https://api.clinicadentalsofiacastro.com/deleteUser/' + id)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (

    <div>
      <Typography variant="h6" className='pb-3'>Usuarios Recientes</Typography>
      <Link to={`DashboardCreateUser`}>
        <Button variant="contained" class='btn btn-success'>
          Crear
        </Button>
      </Link>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className='pt-3'>Identificación</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Provincia</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.identification}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.province}, {user.canton}, {user.distrit}</TableCell>
              <TableCell>
                <Link to={`UpdateUser/${user._id}`}>
                  <Button variant="contained" color="primary">
                    Actualizar
                  </Button>
                </Link>
                <Button variant="contained" color="secondary" onClick={(e) => handleDelete(user._id)}>
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserList;
