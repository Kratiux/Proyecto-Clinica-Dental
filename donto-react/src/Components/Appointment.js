import React, { Component } from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';

class Appointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Nombre',
            email: 'Correo',
            phone: 'Telefono',
            subject: 'Asunto',
            message: 'Mensaje'
        };
    }


    myChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    myChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    myChangePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    myChangeSubject = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    myChangeMessage = (event) => {
        this.setState({
            message: event.target.value
        })
    }

   handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            // Make a POST request to your server with form data
            const response = await axios.post('https://api.clinicadentalsofiacastro.com/send-email', formData);

            // Check the server response and provide user feedback
            if (response.status === 200) {
                // Show SweetAlert on success
                Swal.fire({
                    title: 'Éxito',
                    text: 'El correo se ha enviado exitosamente.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    // Reload the page after the user clicks OK
                    window.location.reload();
                });

                // Optionally, reset the form or show a success message to the user
            } else {
                console.error('Error sending email. Server responded with:', response.status);
                // Optionally, show an error message to the user
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Optionally, show an error message to the user
        }
    };


    render() {
        return (
            <section className="appointment-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-8">
                            <div className="section-title-one">
                                <h1>Consultar Cita</h1>
                            </div>
                            
                            <div className="appointment-form" onSubmit={this.handleSubmit}>
                                <form className="row" onSubmit={this.heandleSubmit}>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input
                                            type='text'
                                            value={this.state.name}
                                            onChange={this.myChangeName}

                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='email'
                                            value={this.state.email} 
                                            onChange={this.myChangeEmail}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='text'
                                            value={this.state.phone} 
                                            onChange={this.myChangePhone}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <input 
                                            type='text'
                                            value={this.state.subject}
                                            onChange={this.myChangeSubject} 
                                        />
                                    </div>
                                    <div className="col-lg-12 col-12">
                                        <textarea
                                            value={this.state.message} 
                                            onChange={this.myChangeMessage}
                                        />
                                    </div>
                                    <button className="submit-btn" type="submit">Enviar Mensaje</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="appointment-right-banner">
                    <img src={require("../assets/img/appointment.png")} alt="donto" />
                </div>
            </section>
        )
    }
}

export default Appointment
