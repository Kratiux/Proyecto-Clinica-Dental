import React, { Component } from 'react'
import CountUp from 'react-countup';
import Banner from '../Banner';
import SectionTitleOne from '../SectionTitleOne'
import Appointment from '../Appointment';
import BlogOne from '../Blog/BlogOne';
import BlogData from '../Data/BlogData';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner pageTitle='Acerca de Nosotros' />

                <section className="about-page-top-content-wrap section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-8 offset-lg-2 text-center">
                                <div className="section-text-wrap">
                                    <h1>Nuestra Pactica </h1>
                                    <p>Desde 2018, Donto Dentistry ha estado orgulloso de combinar técnicas modernas y equipos de alta tecnología. La Dra. Sofía Castro y su equipo ofrecen una experiencia personalizada y cómoda en el cuidado dental, única entre los dentistas de Heredia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="patient-focused-wrap section-padding text-white section-bg text-center">
                    <div className="container">
                        
                        <SectionTitleOne BigTitle='Enfoque Centrado en el Paciente' />

                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="best-service-item-box">
                                    <div className="service-box-icon">
                                        <img src={require ("../../assets/img/icons/like.png") } alt="" />
                                    </div>
                                    <h3><a href="/SignIn/signIn">Consolation</a></h3>
                                    <p>Es importante destacar que la consolidación es una fase crucial para establecer una comprensión clara entre el odontólogo y el paciente, brindando la oportunidad de responder preguntas y asegurar que ambos estén alineados en el enfoque para el cuidado dental.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="best-service-item-box">
                                    <div className="service-box-icon">
                                        <img src={require ("../../assets/img/icons/love.png") } alt="" />
                                    </div>
                                    <h3><a href="/SignIn/signIn">Familiaridad</a></h3>
                                    <p>Un entorno familiar en una clínica dental puede incluir la actitud acogedora y amigable del personal, explicaciones claras por parte del odontólogo, y un ambiente general que inspira confianza. La familiaridad también se relaciona con la relación de confianza que se construye entre el paciente y el equipo dental. </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-12">
                                <div className="best-service-item-box">
                                    <div className="service-box-icon">
                                        <img src={require ("../../assets/img/icons/respect.png") } alt="" />
                                    </div>
                                    <h3><a href="/SignIn/signIn">Resultado
                                    </a></h3>
                                    <p>Un buen resultado se traduce en la satisfacción del paciente con el tratamiento recibido. Esto puede incluir la mejora de la salud bucal, la estética dental o la solución efectiva de problemas dentales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               
               
                
                <BlogOne BlogData={BlogData} />
                <Appointment />

            </React.Fragment>
        )
    }
}

export default About
