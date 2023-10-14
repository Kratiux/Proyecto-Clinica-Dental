import React, { Component } from 'react';
import SectionTitleOne from '../SectionTitleOne';


class TestimonailOne extends Component {
    render() {

        return (
            <section className="testimonial-one-wrapper section-padding">
                <div className="hero-shape service-shape">
                    <img src={require("../../assets/img/shape/rmc.png")} alt="modinatheme" className="shape shape2" />
                    <img src={require("../../assets/img/shape/plusgs.png")} alt="modinatheme" className="shape shape4" />
                    <img src={require("../../assets/img/shape/plusg.png")} alt="modinatheme" className="shape shape6" />
                    <img src={require("../../assets/img/shape/plusr.png")} alt="modinatheme" className="shape shape8" />
                    <img src={require("../../assets/img/shape/sgdot.png")} alt="modinatheme" className="shape shape9" />
                </div>
                <div className="container">

                    <SectionTitleOne BigTitle="Testimonios"/>

                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-4 col-12">
                            <div className="single-client-box">
                                <div className="client-image">
                                    <img src={require("../../assets/img/testi1.png")} alt="modinatheme" />
                                </div>
                                <h3>Sandra Ramírez</h3>
                                <span>Cliente Frecuente</span>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 col-lg-8 ">
                            <div className="single-review-item">
                                <h5>¡Excelente Trabajo!</h5>
                                <p>“Los doctores tienen un excelente humor frente a la clientela, y procuran el cuidado de la sonrisa y la salud dental y bucal con gran pasión.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default TestimonailOne
