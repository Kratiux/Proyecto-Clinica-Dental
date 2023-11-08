
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function UpdateFile() {
    const { id } = useParams();
    const history = useHistory();
    const [identification, setIdentification] = useState();
    const [names, setNames] = useState();
    const [lastName, setLastName] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/getFile/${id}`)
            .then(result => {console.log(result)
                setIdentification(result.data.identification);
                setNames(result.data.names);
                setLastName(result.data.lastName);
                setDescription(result.data.description);


            })
            .catch(error => console.error(error));

    }, [id]);


    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateFile/${id}`, { identification, names, lastName, description })
            .then(result => {
                history.push('/Admin/DashboardUpdateFile');
                // Manejar la respuesta o redirigir a una página de éxito
                console.log(result);
                // Puedes redirigir a una página de éxito o a donde necesites
                
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            
            <form onSubmit={Update}>
            <h1>Update File</h1>
                <div>
                    <label>Identification:</label>
                    <input type="text" name="identification" value={identification} onChange={(e) => setIdentification(e.target.value)} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={names} onChange={(e) => setNames(e.target.value)} />
                </div>
                <div>
                    <label>LastName:</label>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button className='btn btn-success'>Update File</button>
            </form>
        </div>
    );
}

export default UpdateFile;