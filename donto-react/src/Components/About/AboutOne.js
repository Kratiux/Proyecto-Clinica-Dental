import React, { Component } from 'react';
import CountUp from 'react-countup';


class AboutOne extends Component {
    render() {
        return (
            <section className="about-wrapper about-us-one section-padding pt-0">
                <div className="about-shape">
                    <img src={require ("../../assets/img/shape/circle1.png") } alt="donto" className="shape ab1" />
                    <img src={require ("../../assets/img/shape/bluef.png") } alt="donto" className="shape ab2" />
                    <img src={require ("../../assets/img/shape/dotmr.png") } alt="donto" className="shape ab3" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="about-us-one-left">
                                <img src={require ("../../assets/img/about-banner1.png") } alt="donto" />
                                <img src={require ("../../assets/img/about-banner2.png") } alt="donto" className="about-animate" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="about-us-one-right mt-5 mt-lg-0">
                                <div className="about-heading">
                                    <h1>¡Bienvenidos a la familia!</h1>
                                </div>
                                <p>En la Clínica Dental Sofía Castro proveemos el mejor servicio para asegurar tu salud dental.</p>
                                <a href="/Page/About" className="btn-link">Acerca de nosotros</a>
                                <div className="fun-fact-section ">
                                    <div className="single-funfact-one">
                                        < span > < CountUp
                                        end = {
                                            500
                                        }
                                        duration = {
                                            3.75
                                        }
                                        /></span >
                                        <p>Clientes Satisfechos</p>
                                    </div>
                                    <div className="single-funfact-one sp-fun">
                                        <span>
                                            <CountUp
                                end={10}
                                duration={2.75} />
                                </span>
                                        <p>Doctores Calificados</p>
                                    </div>
                                    <div className="single-funfact-one">
                                        < span > < CountUp
                                        end = {
                                            8
                                        }
                                        duration = {
                                            3.75
                                        }
                                        /></span >
                                        <p>Años de Experiencia</p>
                                    </div>
                                    <div className="single-funfact-one sp-fun">
                                        <span><CountUp
                                end={10}
                                duration={3.75} /></span>
                                        <p>Reconocimientos</p>
                                    </div>
                                    <span className="line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AboutOne
