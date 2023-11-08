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
    axios.get('http://localhost:3001/')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);




  const handleDelete=(id) =>{

    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res=> {console.log(res)
    window.location.reload()
    })
    .catch(err => console.log(err))
}

  return (

    <div>
    <Typography variant="h6">Usuarios Recientes</Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Identification</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Province</TableCell>
          <TableCell>Canton</TableCell>
          <TableCell>District</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell>{user.identification}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.birthday}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.province}</TableCell>
            <TableCell>{user.canton}</TableCell>
            <TableCell>{user.distrit}</TableCell>
            <TableCell>{user.img}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
            <Link to={`DashboardCreateUser`}>
                <Button variant="contained" color="green">
                  Crear
                </Button>
            </Link>
              <Link to={`UpdateUser/${user._id}`}>
                <Button variant="contained" color="primary">
                  Actualizar
                </Button>
              </Link>
              <Button  variant="contained" color="secondary" onClick={(e)=> handleDelete(user._id)}>
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
