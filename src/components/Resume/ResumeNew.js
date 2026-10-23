import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";
import { profile, experiences, skillGroups, certifications } from "../../data/portfolio";

function ResumeNew() {
  return <Container fluid className="resume-section"><Container style={{ textAlign: "left", paddingTop: "30px", paddingBottom: "60px" }}>
    <h1 className="project-heading" style={{ textAlign: "center" }}>My <strong className="purple">Resume</strong></h1>
    <div className="project-card-view" style={{ padding: "25px", marginBottom: "30px" }}>
      <h2>{profile.name}</h2><p className="purple">{profile.title}</p>
      <p>{profile.location}</p>
      <div className="resume-contact-actions" aria-label="Contact and social links">
        <a href={`mailto:${profile.email}`} aria-label="Send Ravi an email" title="Send email"><FiMail aria-hidden="true" /><span className="visually-hidden">Email</span></a>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`} aria-label="Call Ravi" title="Call"><FiPhone aria-hidden="true" /><span className="visually-hidden">Phone</span></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Ravi on LinkedIn" title="LinkedIn"><FiLinkedin aria-hidden="true" /><span className="visually-hidden">LinkedIn</span></a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Ravi on GitHub" title="GitHub"><FiGithub aria-hidden="true" /><span className="visually-hidden">GitHub</span></a>
      </div>
      <p>{profile.summary}</p>
    </div>
    <h2 className="purple">Professional Experience</h2>
    {experiences.map(item => <div key={item.project} className="project-card-view" style={{ padding: "22px", marginBottom: "20px" }}>
      <h3>{item.role}</h3><p><strong>{item.company}</strong> · {item.period}</p>
      <p className="purple">{item.project}</p><p><strong>Stack:</strong> {item.stack}</p>
      <ul>{item.highlights.map(point => <li key={point}>{point}</li>)}</ul>
    </div>)}
    <h2 className="purple">Core Skills</h2><Row>{skillGroups.map(group => <Col md={6} key={group.title} style={{ marginBottom: "15px" }}><strong>{group.title}:</strong> {group.skills.join(", ")}</Col>)}</Row>
    <h2 className="purple" style={{ marginTop: "30px" }}>Education</h2>
    <p>B.Tech, Computer Science · Siddhartha Institute of Engineering & Technology, Hyderabad · 2016–2020 · 75%</p>
    <h2 className="purple">Certifications</h2><ul>{certifications.map(c => <li key={c}>{c}</li>)}</ul>
    <h2 className="purple">Additional</h2>
    <p>YouTube content creator (5.85K subscribers), teaching Python concepts using Telugu song lyrics; CSR volunteer in food distribution and tree planting; company blog contributor.</p>
  </Container></Container>;
}
export default ResumeNew;
