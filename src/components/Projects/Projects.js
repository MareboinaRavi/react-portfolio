import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { experiences } from "../../data/portfolio";

function Projects() {
  return <Container fluid className="project-section"><Container>
    <p className="section-eyebrow">SELECTED WORK</p>
    <h1 className="project-heading">Real-world <strong className="purple">impact.</strong></h1>
    <p className="portfolio-section-intro">Products built across banking, healthcare, retail and education. These are professional engagements; private client source code is not linked.</p>
    <Row style={{ justifyContent: "center", paddingBottom: "60px" }}>
      {experiences.map((item, index) => <Col key={item.project} md={6} lg={4} className="project-card">
        <article className="project-card-view" style={{ height: "100%", padding: "26px", textAlign: "left" }}>
          <div className="portfolio-card-label">PROJECT {String(index + 1).padStart(2, "0")}</div>
          <h2 className="portfolio-project-title" style={{ marginTop: 16 }}>{item.project}</h2>
          <p className="portfolio-project-meta">{item.company} · {item.period}</p>
          <ul className="portfolio-project-list">{item.highlights.slice(0, 3).map(point => <li key={point}>{point}</li>)}</ul>
          <p className="portfolio-project-stack"><strong>STACK</strong> · {item.stack}</p>
        </article>
      </Col>)}
    </Row>
  </Container></Container>;
}
export default Projects;
