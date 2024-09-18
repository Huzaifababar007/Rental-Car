import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-section.css';
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = ({aboutClass}) => {
  return (
    <section className='about__section' style={aboutClass === "aboutPage" ? {marginTop: "0px" } : {marginTop: "289px"}} >
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About Us</h4>
                        <h2 className="section__title">Welcome to Rent Car Service</h2>
                        <p className="section__description">At RC Service , we are committed to providing top-quality car rental services that prioritize convenience, reliability, and customer satisfaction. With a diverse range of well-maintained vehicles, we cater to every travel need, whether it's a business trip, family vacation, or a quick city drive. Our easy booking process, competitive pricing, and exceptional customer support ensure a hassle-free rental experience. Trust us to get you where you need to go, safely and comfortably.</p>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Diverse vehicle selection for all travel needs.</p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Flexible rental plans to fit any schedule.</p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Quick and easy online booking process.</p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Well-maintained and clean vehicles for safety.</p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2"><i className="ri-checkbox-circle-line"></i>Multiple payment options for added convenience.</p>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt="" className="w-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection