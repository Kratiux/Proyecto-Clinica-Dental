import React, { Component } from 'react';
import Banner from '../Banner';
import axios from 'axios';
import Swal from 'sweetalert2';

class Contact extends Component {
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
            <React.Fragment>
                <Banner pageTitle='Contactenos' />

                <section className="contact-us-wrapper section-padding">
                    <div className="contact-information">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-4 col-md-6 col-12">
                                    <div className="single-contact-info icon1">
                                        <div className="c-icon">
                                            <i className="fal fa-home" />
                                        </div>
                                        <div className="c-info">
                                            <h4>Direccion</h4>
                                            <p>Heredia, Guarari</p>
                                          
                                            <iframe
                                                title="Google Maps"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860.075207666634!2d-84.100836315823!3d9.9308263585164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fd6a195d5809%3A0x72681ad812c02c9d!2sHilton%20-%20La%20Sabana!5e0!3m2!1ses-419!2scr!4v1701249359431!5m2!1ses-419!2scr"
                                                width="100"
                                                height="100"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-4 col-md-6 col-12">
                                    <div className="single-contact-info icon2">
                                        <div className="c-icon">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="c-info">
                                            <h4>correo</h4>
                                            <p>
                                                <a href="mailto:info@dentzone.com">sofiarodriguez12@gmail.com</a>
                                            </p>
                                            <p>
                                                <a href="mailto:email@gmail.com">donto-react@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-4 col-md-6 col-12">
                                    <div className="single-contact-info icon3">
                                        <div className="c-icon">
                                            <i className="fal fa-phone-volume" />
                                        </div>
                                        <div className="c-info">
                                            <h4>Telefono</h4>
                                            <p>
                                                <a href="tel:+18884421123832">(888) 4421-1238-32</a>
                                            </p>
                                            <p>
                                                <a href="tel:+18888381238645">(888) 838-1238-645</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wraper">
                        <div className="container">
                            <h1>Contactenos</h1>
                            <form className="row" name="formData" onSubmit={this.handleSubmit}>
    <div className="col-lg-6 col-md-6 col-12">
        <input type="text" name="name" placeholder="Nombre" />
    </div>
    <div className="col-lg-6 col-md-6 col-12">
        <input type="email" name="email" placeholder="Correo" />
    </div>
    <div className="col-lg-6 col-md-6 col-12">
        <input type="text" name="phone" placeholder="Telefono" />
    </div>
    <div className="col-lg-6 col-md-6 col-12">
        <input type="text" name="subject" placeholder="Asunto" />
    </div>
    <div className="col-lg-12 col-12">
        <textarea name="message" placeholder="Mensaje" defaultValue={""} />
    </div>
    <button className="contact-submit-btn" type="submit">
       Enviar
    </button>
</form>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Contact;
