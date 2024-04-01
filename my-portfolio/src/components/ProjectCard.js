import { useState } from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gifUrl, gitUrl, technologies }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Col>
      <a href={gitUrl} target="_blank" rel="noreferrer">
        <div
        className="proj-imgbx"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
          <img className="proj-img" src={isHovering ? (gifUrl || imgUrl) : imgUrl} alt="project" />
          <div className="proj-txt">
            <h4>{title}</h4>
            <span>{description}</span>
            <div>{technologies}</div>
          </div>
        </div>
      </a>
    </Col>
  );
};
