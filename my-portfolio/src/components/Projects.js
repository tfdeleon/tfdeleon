import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Halfway from "../assets/img/halfway.jpg";
import Astro from "../assets/img/Astro.jpg"
import Astrogif from "../assets/img/astrogif.gif"
import Messengergif from '../assets/img/Messengergif.gif'
import Messenger from '../assets/img/Messenger.jpg'
import { Footer } from "./Footer";
import "../styles/Project.css"

export const Projects = () => {
  const projects = [
    {
      title: "Astro",
      imgUrl: Astro,
      gifUrl: Astrogif,
      gitUrl: "https://gitlab.com/barrettAJ/astro",
      technologies: "JavaScript, Python, Django, React, RESTful APIs, PostgreSQL,"
    },
    {
      title: "Type Halfway",
      imgUrl: Halfway,
      gifUrl: Halfway,
      gitUrl: "https://gitlab.com/tfdeleon/Type-HalfWay",
      technologies: "FastAPI, PostgreSQL, React, Bootstrap, MaterialUI, "
    },
    {
      title: "Msg.",
      imgUrl: Messenger,
      gifUrl: Messengergif,
      gitUrl: "https://github.com/tfdeleon/chat_app/tree/main/messenger",
      technologies: "Next.Js, Typescript, WebSockets, NextAuth, TailwindCSS,Redis"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <hr className="divider"></hr>
              <h2>Projects</h2>
            </div>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
      </Container>
      <Footer />
    </section>
  );
};
