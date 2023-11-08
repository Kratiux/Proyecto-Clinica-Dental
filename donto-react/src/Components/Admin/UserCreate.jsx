
import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    phone: '',
    birthday: '',
    gender: '',
    email: '',
    password: '',
    province: '',
    canton: '',
    distrit: '',
    role: '',
  });

  const handleCreate = () => {
    // Enviar una solicitud POST para crear un nuevo usuario en el servidor
    axios.post('http://localhost:3001/register', userData)
      .then((response) => {
        // Manejar la respuesta o redirigir a una página de éxito
        console.log('Usuario creado:', response.data);
        // Puedes redirigir a una página de éxito o a donde necesites
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <h1>Create User</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={userData.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} />
        </div>
        <div>
          <label>Birthday:</label>
          <input type="text" name="birthday" value={userData.birthday} onChange={handleInputChange} />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={userData.gender} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" name="password" value={userData.password} onChange={handleInputChange} />
        </div>
        <div>
          <label>Province:</label>
          <input type="text" name="province" value={userData.province} onChange={handleInputChange} />
        </div>
        <div>
          <label>Canton:</label>
          <input type="text" name="canton" value={userData.canton} onChange={handleInputChange} />
        </div>
        <div>
          <label>Distrit:</label>
          <input type="text" name="distrit" value={userData.distrit} onChange={handleInputChange} />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" name="role" value={userData.role} onChange={handleInputChange} />
        </div>
        <button onClick={handleCreate}>Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;