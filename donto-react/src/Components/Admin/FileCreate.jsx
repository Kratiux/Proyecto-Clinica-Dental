
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreateFile() {
  const [identification, setIdentification] = useState();
  const [names, setNames] = useState();
  const [lastName, setLastName] = useState();
  const [description, setDescription] = useState();
  let history = useHistory();
  

  const Submit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/registerFile", {identification, names, lastName, description})
    .then((response) => {
        // Manejar la respuesta o redirigir a una página de éxito
        console.log('Usuario creado:', response.data);
        // Puedes redirigir a una página de éxito o a donde necesites
        history.push('/Admin/FilePatient');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Create File</h1>
      <form onSubmit={Submit}>
        <div>
          <label>Identification:</label>
          <input type="text" name="identification" onChange={(e) => setIdentification(e.target.value)} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={(e) => setNames(e.target.value)} />
        </div>
        <div>
          <label>LastName:</label>
          <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description"  onChange={(e) => setDescription(e.target.value)}/>
        </div>
        
        <button className='btn btn-success'>Create File</button>
      </form>
    </div>
  );
}

export default CreateFile;