import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Orbit Health Care"
              description="Orbit Healthcare is the industry leader in AI-Powered, virtual and point of care insurance capture, extraction, verification, prior authorization and document AI. Our solutions reduce denials and increase eligibility verification accuracy with automated data intake and processing in real time."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://orbithc.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Burger King"
              description="Burger King India, located in Bengaluru, Karnataka, is a subsidiary of the Burger King Corporation. It was the first Burger King franchised restaurant in India. The company opened its first store in November 2019 and currently has its stores located across India including Delhi NCR, Mumbai, Pune, Hyderabad and more."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.burgerking.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Rushividhybhyasam"
              description="An online university. The university hosts all educational programs being run under the umbrella of Rushipeetam to cater to audience across various age groups.Rushipeetham Publications has been established to promote the literary treasure of Vedic knowledge through publication of various literary works"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://rushividyabhyasam.org/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
