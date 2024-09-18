import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                Welcome to <b>RC Rent Car Service</b>, where we offer a diverse range of vehicles to meet all your travel needs, from compact cars to luxury sedans. 
                We are committed to providing exceptional service at competitive prices, ensuring a seamless and stress-free experience. 
                Whether you're traveling for business or leisure, our dedicated team is here to make your journey smooth and enjoyable.
                Choose <b>RC Rent Car Service</b> for reliable car rentals and outstanding customer satisfaction.
                </p>

                <p className='section__description'>
                Our extensive fleet includes a variety of vehicles, ensuring you find the perfect match for any occasion. 
                We prioritize your convenience and satisfaction, offering flexible rental options and unbeatable customer support. 
                With <b>RC Rent Car Service</b>, you can explore with confidence, knowing you have a reliable partner on the road. 
                Experience hassle-free car rentals with us today!
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+92 345 6785630</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
