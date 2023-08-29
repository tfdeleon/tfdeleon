import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Halfway from "../assets/img/halfway.jpg";
// import Astro from "../assets/img/Astro.jpg"
import Astrogif from "../assets/img/astrogif.gif"
import { Footer } from "./Footer";
import "../styles/Project.css"

export const Projects = () => {
  const projects = [
    {
      title: "Astro",
      description:
        "Developed  a Spaceship dealership management app, using Django, React, RESTful APIs, and PostgreSQL, enhancing operational efficiency and streamlining processes.",
      imgUrl: Astrogif,
      gitUrl: "https://gitlab.com/barrettAJ/astro",
      technologies: "JavaScript, Python, Django, React, RESTful APIs, PostgreSQL,"
    },
    {
      title: "Type Halfway",
      description:
      "A dating web application where users can find their soulmate by weeding out bad seeds with the implementation of dating reviews",
      imgUrl: Halfway,
      gitUrl: "https://gitlab.com/barrettAJ/astro",
      technologies: "FastAPI, PostgreSQL, React, Bootstrap, MaterialUI, "
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
