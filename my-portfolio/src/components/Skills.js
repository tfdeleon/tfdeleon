import { Container, Row, Col } from "react-bootstrap";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiFastapi,
  SiBootstrap,
  SiRedis,
  SiGit,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSocketdotio,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import "../styles/Skills.css"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col >
            <div className="skill-bx">
              <hr className="divider"></hr>
              <h2>Skills</h2>
            </div>
          </Col>
        </Row>
        <Row xs={3} sm={3} md={4} lg={4} xl={4} xxl={4}>
          <Col className="item-bx" xs={3} sm={3}>
            <div className="align-self-center item">
              <SiPython size={"5em"}/>
            <h5>Python</h5>
            </div>
          </Col>
          <Col className="item-bx" xs={3} sm={3}>
            <div className="align-self-center item" >
              <SiJavascript size={"5em"}/>
              <h5>JavaScript</h5>
            </div>
          </Col>
          <Col className="item-bx" xs={3} sm={3}>
            <div className="item">
              <SiTypescript size={"5em"}/>
              <h5>TypeScript</h5>
            </div>
          </Col>
          <Col className="item-bx" xs={3} sm={3}>
            <div className="item">
              <SiNextdotjs size={"5em"}/>
             <h5>Next.Js</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiReact size={"5em"}/>
             <h5>React</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiDjango size={"5em"}/>
            <h5>Django</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiFastapi size={"5em"}/>
             <h5>FastAPI</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiGit size={"5em"}/>
              <h5>Git</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiRedis size={"5em"}/>
             <h5>Redis</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiPostgresql size={"5em"}/>
              <h5>PostgreSQL</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiTailwindcss size={"5em"}/>
              <h5>TailwindCSS</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiHtml5 size={"5em"}/>
              <h5>HTML</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiCss3 size={"5em"}/>
              <h5>CSS</h5>
            </div>
          </Col>
          <Col className="item-bx" xs={3} sm={3}>
            <div className="item">
              <SiBootstrap size={"5em"}/>
              <h5>Bootstrap</h5>
            </div>
          </Col>
          <Col className="item-bx" xs={3} sm={3}>
            <div className="item">
              <SiDocker size={"5em"}/>
             <h5>Docker</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiSocketdotio size={"5em"}/>
              <h5>Socket.io</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
