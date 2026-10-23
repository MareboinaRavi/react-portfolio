import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaGitAlt, FaGithub, FaReact, FaAngular, FaJira } from "react-icons/fa";
import { SiFlutter, SiVite, SiWebpack, SiEslint, SiJest, SiPostman, SiTypescript } from "react-icons/si";
import { FiGitBranch } from "react-icons/fi";

const tools = [
  { name: "Git", Icon: FaGitAlt },
  { name: "GitHub", Icon: FaGithub },
  { name: "React Native", Icon: FaReact },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Angular", Icon: FaAngular },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Vite", Icon: SiVite },
  { name: "Webpack", Icon: SiWebpack },
  { name: "ESLint", Icon: SiEslint },
  { name: "Jest", Icon: SiJest },
  { name: "Postman", Icon: SiPostman },
  { name: "CI/CD", Icon: FiGitBranch },
  { name: "Jira", Icon: FaJira }
];

function Toolstack() {
  return <Row className="tool-grid" style={{ justifyContent: "center", paddingBottom: "55px" }}>
    {tools.map(({ name, Icon }) => <Col key={name} xs={6} sm={4} md={3} lg={2} className="tool-grid-cell">
      <div className="tool-tile"><Icon className="tool-tile-icon" aria-hidden="true" /><span>{name}</span></div>
    </Col>)}
  </Row>;
}
export default Toolstack;
