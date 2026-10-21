import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { experiences } from "../../data/portfolio";
function Projects() {
  return <Container fluid className="project-section"><Particle /><Container>
    <h1 className="project-heading">Professional <strong className="purple">Projects</strong></h1>
    <p style={{ color: "white" }}>Selected client and product work. Source code is not linked because these are professional engagements.</p>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {experiences.map(item => <Col key={item.project} md={6} lg={4} className="project-card">
        <div className="project-card-view" style={{ height: "100%", padding: "25px", color: "white", textAlign: "left" }}>
          <h3 style={{ fontSize: "1.5rem" }}>{item.project}</h3>
          <p className="purple">{item.company} · {item.period}</p>
          <p><strong>Tech:</strong> {item.stack}</p>
          <ul style={{ paddingLeft: "20px" }}>{item.highlights.map(point => <li key={point} style={{ marginBottom: "9px" }}>{point}</li>)}</ul>
        </div>
      </Col>)}
    </Row>
  </Container></Container>;
}
export default Projects;
