import React, { Component } from 'react'
import Appointment from '../Appointment';
import Banner from '../Banner';


class DentistDetails extends Component {
    render() {
        var bg = require ('../../assets/img/dentist-profile-img.jpg');
        var achievementImg = require('../../assets/img/achievement.jpg');

        return (
            <React.Fragment>
                <Banner pageTitle='Dr. Sofia Castro' />

                <section className="dentist-details-wrap section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-8 col-12">
                                <div className="single-dentist-details">
                                    <h2>Dr. Sofia Castro <span>(DMD, MS, DICOI)</span></h2>
                                    <p>es una apasionada dentista con una dedicación inquebrantable hacia la salud bucal. Nacida en [ciudad], Laura descubrió su fascinación por la odontología desde temprana edad, inspirada por la idea de mejorar sonrisas y, por ende, la calidad de vida de las personas.

Después de completar su licenciatura en Odontología en la Universidad [Nombre], la Dra. Martínez se sumergió en la práctica clínica, perfeccionando sus habilidades en diagnóstico, tratamiento y prevención de enfermedades dentales. Su enfoque holístico hacia la atención del paciente la ha convertido en una profesional querida en la comunidad, donde no solo se preocupa por la salud dental, sino también por el bienestar general de quienes confían en sus cuidados.</p>
                                    <div className="dentist-award-membership">
                                        <h3>Asociacion Dental </h3>
                                        <li>Colegio de Dentistas</li>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 col-12">
                                <div className="dentist-profile-details">
                                    <div className="profile-img bg-cover mb-35" style={{ backgroundImage: "url(" + bg + ")" }}  >
                                    </div>
                                    <p>Nombre <strong>Sofia Castro</strong></p>
                                    <p>Especializacion: <strong>Cirujana dental</strong></p>
                                    <p>Numero de telefono <strong>1-866-764-5387</strong></p>
                                    <div className="dentist-social-link">
                                        <a href=".#"><i className="fab fa-facebook-f" /></a>
                                        <a href=".#"><i className="fab fa-twitter" /></a>
                                        <a href=".#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="achievements-content-section section-padding pt-0 pb-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-6 col-12">
                                <div className="achievement-img-banner bg-cover bg-center" style={{ backgroundImage: "url(" + achievementImg + ")" }}></div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <div className="promo-text">
                                    <h2>Logros</h2>
                                    <p>Excelencia Académica: Obtener un título destacado en odontología y haber completado programas de educación continua para mantenerse actualizado con los avances en el campo.

Práctica Exitosa: Establecer y mantener una práctica dental exitosa, construyendo una sólida reputación entre los pacientes y la comunidad.

Especialización: Obtener certificaciones en áreas especializadas como ortodoncia, periodoncia, odontología estética, implantología, entre otras.</p>
                                    <p>Participación en Investigación: Contribuir a la investigación odontológica a través de publicaciones, presentaciones en conferencias o participación en proyectos de investigación.

Participación Comunitaria: Participar en programas comunitarios de salud oral, ferias de salud, charlas educativas en escuelas o colaboración con organizaciones benéficas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Appointment />                
            </React.Fragment>
        )
    }
}

export default DentistDetails
