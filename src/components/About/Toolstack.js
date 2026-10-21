import React from "react";
import { Row, Col } from "react-bootstrap";
const tools = ["Git", "GitHub", "CI/CD", "ESLint", "Webpack", "Vite", "Jira", "Agile", "Jest", "React Testing Library"];
function Toolstack() {
  return <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {tools.map(tool => <Col key={tool} xs={6} md={3} className="tech-icons" style={{ fontSize: "1.1rem", padding: "18px 8px" }}>{tool}</Col>)}
  </Row>;
}
export default Toolstack;
