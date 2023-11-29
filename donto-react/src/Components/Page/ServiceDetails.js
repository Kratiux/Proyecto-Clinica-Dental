import React, { Component } from 'react'
import Appointment from '../Appointment';
import Banner from '../Banner';
 
class ServiceDetails extends Component {
    render() {

        let bg1 = require('../../assets/img/video-bg1.jpg');
        let bg2 = require('../../assets/img/video-bg2.jpg');

        return (
            <React.Fragment>
                <Banner pageTitle='Detalles de Servicios' />
                <section className="promo-content-section section-padding">
                    <div className="promo-section-shape">
                        <img src={require("../../assets/img/shape/plusb.png")} alt="" className="shape promo1" />
                        <img src={require("../../assets/img/shape/plusg.png")} alt="" className="shape promo2" />
                        <img src={require("../../assets/img/shape/dotmr.png")} alt="" className="shape promo3" />
                        <img src={require("../../assets/img/shape/xsrdot.png")} alt="" className="shape promo4" />
                        <img src={require("../../assets/img/shape/plusb.png")} alt="" className="shape promo5" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6 col-12">
                                <div className="promo-text">
                                    <h2>Sonrisas </h2>
                                    <p>En nuestra clínica dental, nos enorgullece ofrecer una gama completa de servicios diseñados para cuidar de tu salud bucal con atención personalizada y profesionalismo. Creemos que cada sonrisa es única y merece un cuidado especializado para lograr su mejor versión.</p>
                                                      </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-12 mt-4 mt-lg-0">
                                <img src={require("../../assets/img/service-details-promo1.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="promo-content-section section-bg text-white promo-bg section-padding">
                    <div className="promo-section-shape">
                        <img src={require("../../assets/img/shape/plusr.png")} alt="" className="shape promo1" />
                        <img src={require("../../assets/img/shape/plusg.png")} alt="" className="shape promo2" />
                        <img src={require("../../assets/img/shape/circle1.png")} alt="" className="shape promo3" />
                        <img src={require("../../assets/img/shape/bluef.png")} alt="" className="shape promo4" />
                        <img src={require("../../assets/img/shape/plusb.png")} alt="" className="shape promo5" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6 col-12 mb-4 mb-lg-0">
                                <img src={require("../../assets/img/service-details-promo2.png")} alt="" />
                            </div>
                            <div className="col-md-12 col-lg-6 col-12">
                                <div className="promo-text">
                                    <h2>Odontología Preventiva</h2>
                                    <p>Nuestro enfoque proactivo incluye revisiones regulares, limpiezas profesionales y selladores para prevenir problemas dentales antes de que ocurran.</p>
                                                            </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="featured-video-section section-padding">
                    <div className="promo-section-shape">
                        <img src={require("../../assets/img/shape/plusr.png")} alt="" className="shape promo1" />
                        <img src={require("../../assets/img/shape/dotmr.png")} alt="" className="shape promo2" />
                        <img src={require("../../assets/img/shape/circle1.png")} alt="" className="shape promo3" />
                        <img src={require("../../assets/img/shape/bluef.png")} alt="" className="shape promo4" />
                        <img src={require("../../assets/img/shape/plusb.png")} alt="" className="shape promo5" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-8 offset-lg-2 text-center">
                                <div className="section-text-wrap pb-25">
                                    <h1>La salud es primero</h1>
                                    <p>Desde 2018, La clinica Sofia Castro ha estado orgulloso de combinar técnicas modernas y equipos de alta tecnología. La Dra. Sofía Castro y su equipo ofrecen una experiencia personalizada y cómoda en el cuidado dental, única entre los dentistas de Mason.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-12">
                                <div className="single-video-item">
                                    <div className="video-bg-img" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                                        <a href="https://www.youtube.com/watch?v=VnPFTJNHDB0" className="popup-video video-play-button">
                                            <i className="fal fa-play" />
                                        </a>
                                    </div>
                                    <h5>La Importancia de unos dientes Saludables en este caso Pericoronitis</h5>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-12">
                                <div className="single-video-item">
                                    <div className="video-bg-img" style={{ backgroundImage: "url(" + bg2 + ")" }}>
                                        <a href="https://www.youtube.com/watch?v=j7932pFLF9k" className="popup-video video-play-button">
                                            <i className="fal fa-play" />
                                        </a>
                                    </div>
                                    <h5>La salud es primero  Exudado</h5>
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

export default ServiceDetails
