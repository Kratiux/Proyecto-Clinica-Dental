import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';


function UpdateUser() {
  const { id } = useParams();
  const history = useHistory();
  const [userData, setUserData] = useState({});
  
  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then((response) => {
        setUserData(response.data);
        

      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  
  const handleUpdate = () => {
    // Envía una solicitud para actualizar los datos del usuario en el servidor
    axios.put(`http://localhost:3001/updateUser/${id}`, userData)
      .then((response) => {
        console.log(response);
        history.push('/Admin/Users'); // Redirige de vuelta a la lista de usuarios
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
      <h1>Update User</h1>
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
          <label>District:</label>
          <input type="text" name="distrit" value={userData.distrit} onChange={handleInputChange} />
        </div>
        <div>
          <label>Image:</label>
          <input type="text" name="img" value={userData.img} onChange={handleInputChange} />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" name="role" value={userData.role} onChange={handleInputChange} />
        </div>
        <button onClick={handleUpdate}>Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;