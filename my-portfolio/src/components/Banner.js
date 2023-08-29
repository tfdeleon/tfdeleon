// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/me.png";
import TrackVisibility from "react-on-screen";
import "../styles/Main.css"
// import "animate.css";

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <span className="tagline">Hi. Welcome to my portfolio!</span>
                  <h1>My name is Timothy</h1>
                  <h2 className="wrap">Full Stack Software Engineer</h2>
                  <p>
                  I thrive on accepting challenges and finding solutions.
                  Motivated by the opportunity to fix bugs and improve systems,
                  I have established myself as a reliable asset within teams.
                  With a wide-ranging knowledge of various programming languages
                  and frameworks, I bring persistence and dedication to my work
                  and remain open to collaborating with engineering teams.
                  </p>
                  <a href="https://www.linkedin.com/in/timothy-de-leon197/">
                    <button>
                      Let's Connect{" "}
                      <ArrowRightCircle size={25}></ArrowRightCircle>
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
