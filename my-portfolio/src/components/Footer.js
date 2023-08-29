import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/icons8-github.svg";
import gitlab from "../assets/img/gitlab700.svg";
import linkedIn from "../assets/img/icons8-linkedin.svg";
import "../styles/Footer.css"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center footer-bx">
          <Col xs={6} sm={6}>
            <div className="social-icon">
            <a
                href="https://gitlab.com/tfdeleon"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitlab} alt="Git lab" />
              </a>
              <a
                href="https://www.linkedin.com/in/timothy-de-leon197/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt=""/>
              </a>
              <a
                href="https://github.com/tfdeleon"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="" />
              </a>
            </div>
          </Col>
          <Col xs={6} sm={6} className="align-self-end">
            <a href="mailto:tfdeleon@buffalo.edu">
              <h1>Email: tfdeleon@buffalo.edu</h1>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
