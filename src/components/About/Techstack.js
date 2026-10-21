import React from "react";
import { Row, Col } from "react-bootstrap";
import { skillGroups } from "../../data/portfolio";
function Techstack() {
  return <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {skillGroups.map(group => <Col key={group.title} md={6} lg={4} className="project-card">
      <div className="project-card-view" style={{ padding: "22px", height: "100%", color: "white", textAlign: "left" }}>
        <h3 className="purple" style={{ fontSize: "1.35rem" }}>{group.title}</h3>
        <p>{group.skills.join(" · ")}</p>
      </div>
    </Col>)}
  </Row>;
}
export default Techstack;
